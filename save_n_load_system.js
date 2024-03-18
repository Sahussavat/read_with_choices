

function save_data(new_save, save_target){
    let save_list = get_save_list();
    if(save_target){
        let founded = false;
        for(let save_game_no in save_list){
            if(save_target === save_list[save_game_no]){
                save_list[save_game_no] = new_save;
                founded = true;
                break;
            }
        }
        if(!founded){
            save_list.push(new_save);
        }
    } else {
        save_list.push(new_save);
    }
    save_the_save_list();
}

function new_save(save_name){
    if(save_name)
    save_data(create_save(save_name));
}

function delete_save(save_target){
    let save_list = get_save_list();
    if(save_target){
        for(let save_game_no in save_list){
            if(save_target === save_list[save_game_no]){
                save_list.splice(save_game_no, 1);
                break;
            }
        }
    }
    save_the_save_list();
}

function create_save(save_name){
    let params = new URL(window.location.href);
    let param_save_page_id = params.searchParams.get("save_page_id");
    return {
        "save_name": save_name,
        "date": (new Date()).getTime(),
        "current_page": param_save_page_id ? url_path(param_save_page_id) : window.location.href,
        "save_data": get_pure_val(),
        "buffer_prev_choices": buffer_prev_choices,
    };
}

function load_save(save_target){
    save_current_data(save_target['save_data']);
    set_buffer_prev(save_target['buffer_prev_choices']);
    save_buffer_prev();
    window.location.href = save_target['current_page'];
}

function auto_save(path_save_url = ""){
    let auto_save_txt = "Auto Save";
    let auto_save_data = create_save(auto_save_txt);
    if(path_save_url){
        auto_save_data['current_page'] = path_save_url;
    }
    
    let params = new URL(window.location.href);
    let param_save_page_id = params.searchParams.get("save_page_id");
    if(param_save_page_id){
        auto_save_data['current_page'] = url_path(param_save_page_id);
    }
    let save_list = get_save_list();
    let founded = false;
    for(let save_game_no in save_list){
        let save_game = save_list[save_game_no];
        if(save_game['save_name'] === auto_save_txt){
            founded = true;
            save_list[save_game_no] = auto_save_data;
            break;
        }
    }   
    if(!founded){
        save_list.push(auto_save_data);
    }
    save_the_save_list();
}

save_list_glo = [];

function get_save_list(){
    let save_list_txt = "save_list";
    if(save_list_glo.length){
        return save_list_glo;
    }
    let save_list = localStorage.getItem(save_list_txt);
    if(!save_list){
        localStorage.setItem(save_list_txt, JSON.stringify(save_list_glo));
    } else {
        save_list_glo = JSON.parse(save_list);
    }
    sort_save_list();
    return save_list_glo;
}

function set_buffer_prev(load_save_data = []){
    let buffer_prev = JSON.parse(localStorage.getItem("current_buffer_prev"));
    if(!buffer_prev){
        buffer_prev = load_save_data;
    }
    return buffer_prev;
}

buffer_prev_choices = set_buffer_prev();

function add_to_buffer_prev(url){
    buffer_prev_choices.push(url);
    save_buffer_prev();
}

function get_prev_from_buffer(){
    let prev = "_no_prev";
    if(buffer_prev_choices.length){
        prev = buffer_prev_choices.shift();
        save_buffer_prev();
    }
    return prev;
}

function go_to_prev_choice(){
    let prev_url = get_prev_from_buffer();
    if(prev_url !== "_no_prev"){
        window.location.href = prev_url;
    }
}

function save_buffer_prev(){
    localStorage.setItem("current_buffer_prev", JSON.stringify(buffer_prev_choices));
}

function get_pure_val(){
    let pure_val = {};
    for(const val_name in values){
        pure_val[val_name] = values[val_name]['current_val'];
    }
    return pure_val;
}

function set_pure_val(pure_val = JSON.parse(localStorage.getItem("current_data"))){
    for(const val_name in pure_val){
        if(val_name in values)
        values[val_name]['current_val'] = pure_val[val_name];
    }
}

function save_current_data(current_data = get_pure_val()){
    localStorage.setItem("current_data", JSON.stringify(current_data));
}

function save_the_save_list(){
    sort_save_list();
    localStorage.setItem("save_list", JSON.stringify(save_list_glo));
}

function sort_save_list(){
    if(save_list_glo.length){
        save_list_glo.sort((a, b)=>{
            return b['date'] - a['date'];
        });
    }
}

function show_load_save_list(){
    let load_save_box = $("#load_save_box");
    load_save_box.empty();
    let save_list_tmp = get_save_list();
    for(let save_data_no in save_list_tmp){
        let save_data = save_list_tmp[save_data_no];

        let card_save = $('<div>', {"class": "card"})
        .data({"save_data": save_data});
        let card_save_body = $('<div>', {"class": "card-body"});
        let delete_button = $('<button>', {
            "class": "btn btn-danger",
            "style": "margin-left: 90%;"}).html("ลบ").click(()=>{
            $("#delete_load_save").modal("toggle");
            $('#load_save_list_modal').modal('toggle');

            $("#delete_load_save_label").html("ต้องการลบเซฟ "+save_data['save_name']+" หรือไม่?");
            $("#delete_load_save_confirm_btn").data({"save_data": save_data});
        });
        card_save.append(card_save_body);
        let card_save_inside_body = $("<div>", {"style": "cursor: pointer;"})
        .click(()=>{
            load_save(save_data);
        })
        card_save_body.append(card_save_inside_body);

        card_save_inside_body.append($('<h4>', {"class": "card-title"}).html(save_data['save_name']));
        card_save_inside_body.append($('<p>', {"class": "card-text"}).html(new Date(save_data['date'])));
        
        card_save_body.append(delete_button);

        load_save_box.append(card_save);
        load_save_box.append($('<br>'));
    }
}

function show_save_list(){
    let save_box = $("#save_box");
    save_box.empty();
    let save_list_tmp = get_save_list();
    for(let save_data_no in save_list_tmp){
        let save_data = save_list_tmp[save_data_no];

        let card_save = $('<div>', {"class": "card"}).data({"save_data": save_data});
        let card_save_body = $('<div>', {"class": "card-body"});
        let delete_button = $('<button>', {
            "class": "btn btn-danger",
            "style": "margin-left: 90%;"}).html("ลบ").click(()=>{
            $("#delete_save").modal("toggle");
            $('#save_list_modal').modal('toggle');

            $("#delete_save_label").html("ต้องการลบเซฟ "+save_data['save_name']+" หรือไม่?");
            $("#delete_save_confirm_btn").data({"save_data": save_data});
        });
        card_save.append(card_save_body);
        let card_save_inside_body = $("<div>", {"style": "cursor: pointer;"})
        .click(()=>{
            $("#overwrite_save").modal("toggle");
            $('#save_list_modal').modal('toggle');

            $("#overwrite_save_label").html("ต้องการทับเซฟ "+save_data['save_name']+" หรือไม่?");
            $("#overwrite_save_confirm_btn").data({"save_data": save_data});
        });
        card_save_body.append(card_save_inside_body);

        card_save_inside_body.append($('<h4>', {"class": "card-title"}).html(save_data['save_name']));
        card_save_inside_body.append($('<p>', {"class": "card-text"}).html(new Date(save_data['date'])));
        
        card_save_body.append(delete_button);

        save_box.append(card_save);
        save_box.append($('<br>'));
    }
}