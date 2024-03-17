
function show_values_n_items_to_player(){
    let show_values_box = $("#show_values_box");
    show_values_box.empty();
    let show_items_box = $("#show_items_box");
    show_items_box.empty();
    for(const val_name in values){
        let value = values[val_name];
        if(value['show']){
            if(value['type'] === "value"){
                let value_box = $("<p>");
                value_box.html( val_name + ": " +value['current_val']);
                show_values_box.append(value_box);
                show_values_box.append($("<br>"));
            } else if(value['type'] === "item" && value['current_val']){
                let value_box = $("<button>", {"class": "btn btn-outline-secondary"});
                value_box.html( val_name + " x " +value['current_val']);
                value_box.click(()=>{
                    let item_show_detail_box = $("#item_show_detail_box").removeAttr("hidden");
                    let item_name = $("#item_name").html(val_name);
                    let item_detail = $("#item_detail");
                    item_detail.attr("hidden", true);
                    if(value['item_detail']){
                        item_detail.html(value['item_detail']).removeAttr("hidden");
                    }
                    let item_use_area = $("#item_use_area");
                    item_use_area.attr("hidden", true);
                    let check_can_use = true;
                    if(value['condition']){
                        check_can_use = check_condition(value['condition']);
                    }
                    if(value['usable']){
                        item_use_area.removeAttr("hidden");
                        let use_item_btn = $("#use_item_btn");
                        use_item_btn.off("click");
                        use_item_btn.click(()=>{
                            let use_results = value['use_results'];
                            for(const use_res_i in use_results){
                                let use_res = use_results[use_res_i];
                                if(value['current_val'] && check_condition(use_res['condition'])){
                                    value['current_val']--;
                                    do_results(use_res['results']);
                                    break;
                                } 
                            }
                            
                            if(!value['current_val']) {
                                item_show_detail_box.attr("hidden", true);
                            }
                            let params = new URL(window.location.href);
                            let param_choices_name = params.searchParams.get("choices");
                            if(param_choices_name)
                            get_choices(param_choices_name, false);
                            save_current_data();
                            auto_save();
                            show_values_n_items_to_player();
                        });
                        if(!check_can_use){
                            use_item_btn.prop('disabled', true);
                        } else {
                            use_item_btn.prop('disabled', false);
                        }
                    }
                });
                show_items_box.append(value_box);
                show_items_box.append($("<br>"));
            }
        }
    }
}