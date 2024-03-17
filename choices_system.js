
function get_choices(choices_name, enable_choice_results = true){
    if(choices_name in data["choose_choices"]){
        var choices_all = data["choose_choices"][choices_name]['choices'];
        var choices_detail = data["choose_choices"][choices_name]['choices_detail'];
        choices_detail = find_and_replace_variable_text(choices_detail);
        if(choices_all){
            if(enable_choice_results){
                if(check_condition(data["choose_choices"][choices_name]['condition'])){
                    do_results(data["choose_choices"][choices_name]['results']);
                }
                if("results_w_condition" in data["choose_choices"][choices_name])
                do_results_with_condition(data["choose_choices"][choices_name]['results_w_condition']);
            }
            let choices_pass_condition = [];
            let n = 1;
            for(const choice_no in choices_all){
                let choice = choices_all[choice_no];
                if(check_condition(choice["condition"])){
                    let detail = find_and_replace_variable_text(choice["detail"]);
                    choices_pass_condition.push([ detail, get_select_path(choice["paths"])
                        , ()=> {do_results(choice["results"]);
                        if("results_w_condition" in choice)
                        do_results_with_condition(choice["results_w_condition"]);} ]);
                    n++;
                }  
            };
            if(choices_pass_condition.length){
                var choices_box = $("#choices_box");
                choices_box.empty();
                choices_box.show();

                let choice_detail_box = $("<p>");
                choice_detail_box.html(choices_detail);
                choices_box.append(choice_detail_box);
                choices_box.append($("<br>"));
                for(const choice_pass_no in choices_pass_condition){
                    let choice_pass = choices_pass_condition[choice_pass_no];
                    let choice_btn = $("<button>", {"style": "margin-top:5%"});
                    choice_btn.html(choice_pass[0]);
                    choice_btn.click(()=>{
                        choice_pass[2]();
                        let cp = choice_pass[1] ? choice_pass[1] :  window.location.href;
                        auto_save(cp);
                        if(select_encounter(cp)){
                            window.location.href = cp;
                        }
                        choices_box.hide();
                    });
                    choices_box.append(choice_btn);
                    choices_box.append($("<br>"));
                }
            }
        }
    }
}   

function find_and_replace_variable_text(text){
    let text_result = text;
    for(const val_name in values){
        text_result = text_result.replace("\\v\["+val_name+"\]" , values[val_name]['current_val']);
    }
    return text_result;
}

function select_path_when_enter(choices_name, chosen_name = "_no_chosen"){
    if(choices_name in data["choose_choices"]){
        var choices_all = data["choose_choices"][choices_name]['choices'];
        if(choices_all){
            if(check_condition(data["choose_choices"][choices_name]['condition'])){
                do_results(data["choose_choices"][choices_name]['results']);
                if("results_w_condition" in data["choose_choices"][choices_name])
                do_results_with_condition(data["choose_choices"][choices_name]['results_w_condition']);
            }
            for(const choice_no in choices_all){
                let choice = choices_all[choice_no];
                if(check_condition(choice["condition"]) && chosen_name === "_no_chosen"
                    || check_condition(choice["condition"]) && chosen_name === choice["nickname"]){
                    
                    let path = get_select_path(choice["paths"]);
                    do_results(choice["results"]);
                    if("results_w_condition" in choice){
                        do_results_with_condition(choice["results_w_condition"]);
                    }
                    window.location.href = path ? path :  window.location.href;
                    break;
                }  
            };
        }
    }
}

function do_results(results){
    for(const result of results){
        if(result[0] in values){
            let value = values[result[0]]["current_val"];
            let value_change = turn_variable_name_to_value(result[2]);
            let sym = do_assign_fn(result[1]);
            values[result[0]]["current_val"] = sym(value, value_change);
        }
    }
    save_current_data();
    auto_save();
    show_values_n_items_to_player();
}

function do_results_with_condition(results_w_con){
    for(const result of results_w_con){
        if(check_condition(result[0])){
            let res = result[1];
            if(res[0] in values){
                let value = values[res[0]]["current_val"];
                let value_change = turn_variable_name_to_value(res[2]);
                let sym = do_assign_fn(res[1]);
                values[res[0]]["current_val"] = sym(value, value_change);
            }
        }
    }
    save_current_data();
    auto_save();
    show_values_n_items_to_player();
}

function get_select_path(paths_with_condition){
    let selected_path = "";
    for(let i=0; i < paths_with_condition.length;i++){
        let condition = paths_with_condition[i][0];
        let path_url = paths_with_condition[i][1];
        if(check_condition(condition)){
            selected_path = path_url;
            break;
        } 
    }
    if(selected_path === ""){
        selected_path = window.location.href;
    }
    return selected_path;
}

function do_assign_fn(sym){
    if(sym === "+"){
        return function(val_init, val_change){
            return val_init + val_change;
        }
    } else if(sym === "-"){
        return function(val_init, val_change){
            return val_init - val_change;
        }
    } else if(sym === "="){
        return function(val_init, val_change){
            return val_change;
        }
    } else if(sym === "*"){
        return function(val_init, val_change){
            return val_init * val_change;
        }
    } else if(sym === "/"){
        return function(val_init, val_change){
            return val_init / val_change;
        }
    }
    else return null;
}

function turn_variable_name_to_value(val_name){
    let val_check = val_name;
    if(typeof val_check === "string"){
        let v_name = val_check.match(/\\v\[(.*)\]/);
        if(v_name){
            val_check = values[v_name[1]]['current_val'];
        }
    }
    return val_check;
}

function check_condition(conditions){
    var result = true;
    var boolean_sym = "and";
    for(const condition of conditions){
        let value = 0;
        if(condition[0] in values)
        {
            value = values[condition[0]]["current_val"];
        }
        let math_sym = math_sym_fn(condition[1]);
        let val_check = turn_variable_name_to_value(condition[2]);
        if(math_sym){
            if(boolean_sym === "or"){
                if(result) break; //if already true, return true.
                else {
                    result = true;
                    result &= math_sym(value, val_check);
                } 
            } else if(boolean_sym === "and") {
                result &= math_sym(value, val_check);
            }
            if(condition.length == 4){
                boolean_sym = condition[3];
            } else { 
                break;
            }
        } else continue;
    }
    return result;
}

function math_sym_fn(math_sym){
    if(math_sym === "="){
        return function(value, val_check){
            return value === val_check;
        }
    } else if(math_sym === "!="){
        return function(value, val_check){
            return value !== val_check;
        }
    } else if(math_sym === "<" || math_sym === "!>="){
        return function(value, val_check){
            return value < val_check;
        }
    } else if(math_sym === "<=" || math_sym === "!>"){
        return function(value, val_check){
            return value <= val_check;
        }
    } else if(math_sym === ">" || math_sym === "!<="){
        return function(value, val_check){
            return value > val_check;
        }
    } else if(math_sym === ">=" || math_sym === "!<"){
        return function(value, val_check){
            return value >= val_check;
        }
    } else if(math_sym === "random"){
        return function(value, val_check){
            return Math.floor(Math.random() * 101) > 100 - (val_check + value);
        }
    } else if(math_sym === "!random"){
        return function(value, val_check){
            return Math.floor(Math.random() * 101) <= 100 - (val_check + value);
        }
    } else if(math_sym === "_check_hav_prev"){
        return function(value, val_check){
            return buffer_prev_choices.length > 0;
        }
    } else return null;
}

function select_encounter(prev_url){
    for(const encounter_name in events_encounter){
        let encounter = events_encounter[encounter_name];
        if(check_condition(encounter['condition'])){
            do_results(encounter['results']);
            add_to_buffer_prev(prev_url);
            window.location.href = encounter['encounter_url'];
            return false;
        }
    }
    return true;
}