values_default = {
    /*
    https://sahussavat.github.io/read_with_choices/index.html?choices=

    https://sahussavat.github.io/read_with_choices/index.html?select=
    
    https://sahussavat.github.io/read_with_choices/next_page.html?page_id=

    https://sahussavat.github.io/read_with_choices/save_page.html?save_page_id=
    */
    //========================================================================================
    "HP": {
        "current_val": 100,
        "type": "value",
        "show": true,
    },
    "เงิน": {
        "current_val": 150,
        "type": "value",
        "show": true,
    },
    "เอฟเฟคปราศจากกลิ่นตัว": {
        "current_val": "ไม่มี",
        "type": "value",
        "show": true,
    },
    "หน้ากากหมออีกา": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "สามารถสวมใส่เพื่อป้องกันการติดเชื้อได้ (ใช้อัตโนมัติ)",
    },
    "ชะแลง": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "สามารถใช้ในการงัดประตูที่ถูกล็อกอยู่ได้",
    },
    "กระดูกก็อบลิน": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "วัตถุดิบสำหรับปรุงยาที่ค่อนข้างจะมีราคาพอสมควร เหมาะที่จะเอาไปขายเป็นอย่างมาก",
    },
    "เศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "ดูแล้วน่าจะเป็นวัตถุดิบสำหรับปรุงยาที่ราคาสูง เหมาะที่จะเอาไปขายเป็นอย่างที่สุด",
    },
    "Health Potion": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "สามารถใช้เพื่อฟื้นฟูเลือด 30 หน่วย",
        "usable": true,
        "use_results": [
            {
                "condition": [
                    ["HP",">=", 70],
                ],
                "results": [
                    ["HP", "=", 100],
                ]
            },
            {
                "condition": [
                    ["HP","<", 70],
                ],
                "results": [
                    ["HP", "+", 30],
                ]
            },
        ]
    },
    "น้ำยาดับกลิ่นตัว": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "สามารถใช้เพื่อลบกลิ่นตัวเป็นจำนวนชั่วระยะเวลาหนึ่ง ผลเอฟเฟคจะหายไปก็ต่อเมื่อซ่อนตัวจากมอนสเตอร์สำเร็จ",
        "usable": true,
        "use_results": [
            {
                "condition": [
                    [],
                ],
                "results": [
                    ["เอฟเฟคปราศจากกลิ่นตัว", "=", "ยังคงอยู่"],
                ]
            },
        ]
    },
    "cost_Health_Potion": {
        "current_val": 50,
        "type": "value",
        "show": false,
    },
    "cost_น้ำยาดับกลิ่นตัว": {
        "current_val": 50,
        "type": "value",
        "show": false,
    },
    "cost_กระดูกก็อบลิน": {
        "current_val": 50,
        "type": "value",
        "show": false,
    },
    "cost_เศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ": {
        "current_val": 400,
        "type": "value",
        "show": false,
    },
    "Pure Potion": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "ยา Potion บริสุทธิ์ สร้างขึ้นจากเลือดของเอลฟ์ที่สืบเชื้อสายศักดิ์สิทธิ์",
    },
    "ศพของสมาชิกกองโจร": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "ศพของสมาชิกกองโจรที่น่าจะถูกสังหารโดยสิ่งมีชีวิตที่อันตราย",
    },
    //========================================================
    "how_you_call_player": {
        "current_val": "คุณ",
        "type": "value",
        "show": false,
    },
    "first_time_potion_shop": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "first_time_enter_dungeon": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "first_time_vilage": {
        "current_val": 1,
        "type": "value",
        "show": false,
    },
    "first_time_camp": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "first_time_goblin": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "first_time_meet_elf": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "first_time_mimic": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "first_time_library": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "first_time_use_secret_way": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "first_time_lab": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "first_time_ritual": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "find_missing_start": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "find_missing_finish": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_kill_all_thiefs": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_kill_all_goblins": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_kill_all_mimic": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_kill_all_wolf": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_elf_healed": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_corpse_clear": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_failed_found_secret_way": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_secret_way_opened": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_thief_steal_potion_yet": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_lab_door_opened": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_elf_dead": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_yana_safe": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "is_plague_clear": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "thiefs_battle_rounds": {
        "current_val": 3,
        "type": "value",
        "show": false,
    },
    "goblins_battle_rounds": {
        "current_val": 4,
        "type": "value",
        "show": false,
    },
    "mimic_battle_rounds": {
        "current_val": 4,
        "type": "value",
        "show": false,
    },
    "wolf_battle_rounds": {
        "current_val": 8,
        "type": "value",
        "show": false,
    },
    "final_battle_rounds": {
        "current_val": 5,
        "type": "value",
        "show": false,
    },
    "goblins_total_damage": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "mimic_total_damage": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "wolf_total_damage": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "final_total_damage": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "no_more_steal": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "wolf_enable_to_attack": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "wolf_enable_to_attack_delay": {
        "current_val": 1,
        "type": "value",
        "show": false,
    },
    "in_danger_zone": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "found_back_story": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "elf_joined_party": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    "thief_joined_party": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
};

if(typeof abilities !== 'undefined'){
    Object.assign(values_default, abilities);
}

/*example_values_default = {
    "apple": {
        "current_val": 3,
        "type": "item",
        "show": true,
        "item_detail": "สามารถกินเพื่อเพิ่มเลือด",
        "usable": true,
        "condition": [
            ["age","<", 100, "and"],
        ],
        "results": [
            ["money", "+", 12],
            ["age", "+", 11],
        ]
    },
};*/

values = {};

for(const val_def_name in values_default){
    values[val_def_name] = Object.assign({}, values_default[val_def_name]);
}

events_encounter = {
    // "letter_from_cake_shop":{
    //     "detail": "คุณได้รับคำเชิญจากร้านเค้กร้านหนึ่งให้ไปพบที่ร้าน",
    //     "choices_name": "1_sub1",
    //     "condition": [["apple",">",0,"and"], ["","random",50,"and"], ["letter","=",true,"and"]],
    //     "results": [[ "letter", "=", false ]],
    // }
    "found_big_wolf":{
        "detail": "คุณได้เผชิญหน้ากับหมาป่ายักษ์",
        "encounter_url": "./index.html?select=which_way_to_meet_wolf",
        "condition": [["wolf_enable_to_attack","=", 1, "and"], ["","random", 50, "and"],],
        "results": [[ "wolf_enable_to_attack", "=", 0 ], ["wolf_enable_to_attack_delay", "=", 1]],
    }
}

//==========================================================================
data = {
    "choose_choices": {

    }
};

if(typeof choices_dungeon_1 !== 'undefined')
Object.assign(data["choose_choices"], choices_dungeon_1["choose_choices"]);

if(typeof choices_dungeon_camp !== 'undefined')
Object.assign(data["choose_choices"], choices_dungeon_camp["choose_choices"]);

if(typeof choices_vilage !== 'undefined')
Object.assign(data["choose_choices"], choices_vilage["choose_choices"]);

if(typeof choices_potion_shop !== 'undefined')
Object.assign(data["choose_choices"], choices_potion_shop["choose_choices"]);

if(typeof choices_goblin !== 'undefined')
Object.assign(data["choose_choices"], choices_goblin["choose_choices"]);

if(typeof choices_dungeon_meet_elf !== 'undefined')
Object.assign(data["choose_choices"], choices_dungeon_meet_elf["choose_choices"]);

if(typeof choices_dungeon_mimic !== 'undefined')
Object.assign(data["choose_choices"], choices_dungeon_mimic["choose_choices"]);

if(typeof choices_wolf_boss !== 'undefined')
Object.assign(data["choose_choices"], choices_wolf_boss["choose_choices"]);

if(typeof choices_dungeon_library !== 'undefined')
Object.assign(data["choose_choices"], choices_dungeon_library["choose_choices"]);

if(typeof choices_research_lab !== 'undefined')
Object.assign(data["choose_choices"], choices_research_lab["choose_choices"]);

if(typeof choice_dungeon_ritual !== 'undefined')
Object.assign(data["choose_choices"], choice_dungeon_ritual["choose_choices"]);

if(typeof choice_result !== 'undefined')
Object.assign(data["choose_choices"], choice_result["choose_choices"]);

if(typeof choices_choose_ability !== 'undefined'){
    Object.assign(data["choose_choices"], choices_choose_ability["choose_choices"]);
}

// example_data = {
//     "choose_choices":{
//         "1":{
//                 "choices_detail":"ทักทายไหม?",
//                 "condition": [
//                     ["money","=", 51, "and"],
//                     ["age","<", 21, "or"],
//                     ["name","=", "jack123", "and"],
//                 ],
//                 "results": [
//                     ["money", "+", 12],
//                     ["age", "+", 11],
//                 ],
//                 "choices": [
//                     {
//                         "detail": "hi",
//                         "paths":[
//                             [[] , "https://www.readawrite.com/c/657b1656e031e22d2f0eb08f0942cd3f?page_no=1"]
//                         ],
//                         "condition": [
//                             ["money","=", 51, "and"],
//                             ["age","<", 21, "or"],
//                             ["name","=", "jack123", "and"],
//                         ],
//                         "results": [
//                             ["money", "-", 12],
//                             ["age", "-", 11],
//                         ]
//                     },
//                     {
//                         "detail": "see ya",
//                         "paths":[
//                             [[] , "https://www.readawrite.com/c/657b1656e031e22d2f0eb08f0942cd3f?page_no=1"]
//                         ],
//                         "condition": [
//                             ["money","=", 51, "and"],
//                             ["age","<", 21, "or"],
//                             ["name","=", "jack", "and"],
//                         ],
//                         "results": [
//                             ["money", "-", 8],
//                             ["age", "-", 9],
//                         ]
//                     },
//                 ],
//         },
//     }
// };