choices_dungeon_mimic = {
    "choose_choices":{
        "meet_mimic":{
            "choices_detail":"คุณได้เดินทางจนมาเจอกับกล่องปริศนาอยู่ตรงหน้า คุณเลือกจะทำอย่างไร?",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "nickname":"open",
                    "detail":"[ ลองเปิด ]", 
                    "paths":[ 
                        [ [], url_path("3e2c81ad56eb22d36c3b0053493d6fdd")],
                    ],
                    "condition": [
                        ["is_kill_all_mimic", "=", 0],
                    ],
                    "results": [
                    ]
                },
                {
                    "nickname":"examine",
                    "detail":"[ ตรวจสอบ ]", 
                    "paths":[ 

                        [ [["how_good_can_you_see", "=", 1, "or"],
                        ["", "random", 50],], "./index.html?select=success_examine_mimic"],

                        [ [], "./index.html?choices=failed_examine_mimic"],
                    ],
                    "condition": [
                        ["is_failed_examine_mimic", "=", 0, "and"],
                        ["is_kill_all_mimic", "=", 0],
                    ],
                    "results": [
                    ]
                },
                {
                    "nickname":"ignore",
                    "detail": "[ ไม่สนใจแล้วไปต่อ ]",
                    "paths":[ 
                        [ [["first_time_library", "=", 0, "and"],
                            ["elf_joined_party", "=", 1],], url_path("11aab038572b47029067811edf87fb27")],

                        [ [["first_time_library", "=", 0]], url_path("08c58be1a3956c3a5cd74597c11a2aad")],

                        [ [["first_time_library", "=", 1, "and"],
                            ["is_corpse_clear", "=", 0],], url_path("e7d469bb44b5d54ca033b43d9d7dd7b4")],

                        [ [["first_time_library", "=", 1, "and"],
                            ["is_corpse_clear", "=", 1]], url_path("2bd20c7f1037d81a97a90bbae2c05fa6")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_library", "=", 1],
                    ],
                    "results_w_condition":[
                        [[["wolf_enable_to_attack", "=", 0, "and"],
                        ["wolf_enable_to_attack_delay", "=", 0, "and"]], ["wolf_enable_to_attack", "=", 1]],
        
                        [[["wolf_enable_to_attack_delay", ">", 0, "and"],], ["wolf_enable_to_attack_delay", "-", 1]],
                        [[], ["", "_enable_encounter", 0]]
                    ],
                },
                {
                    "nickname":"go_back",
                    "detail":"[ เดินย้อนกลับไป ]", 
                    "paths":[ 
                        [ [["first_time_meet_elf", "<=", 0]], url_path("0e31233be036fd0d90051742775f932b")],
                        [ [["first_time_meet_elf", ">", 0, "and"],
                        ["is_elf_healed", "<=", 0 ]], url_path("9f760db6b3fca4d80f59cbc83dd9e64f")],
                        [ [["first_time_meet_elf", ">", 0, "and"],
                        ["is_elf_healed", ">", 1 ]], url_path("fade4e873058e43b06c7e053ada4785d")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_meet_elf", "=", 1],
                    ],
                    "results_w_condition":[
                        [[["wolf_enable_to_attack", "=", 0, "and"],
                        ["wolf_enable_to_attack_delay", "=", 0, "and"]], ["wolf_enable_to_attack", "=", 1]],
        
                        [[["wolf_enable_to_attack_delay", ">", 0, "and"],], ["wolf_enable_to_attack_delay", "-", 1]],
                        [[], ["", "_enable_encounter", 0]]
                    ],
                },
            ],
        },
        "meet_mimic_alone":{
            "choices_detail":"คุณถูก Mimic โจมตี คุณจะทำอย่างไร?",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ สู้ ]", 
                    "paths":[ 
                        [ [], "./index.html?select=fight_mimic"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "kill_with_know_mimic":{
            "choices_detail":"คุณได้ลอบสังหาร Mimic",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ต่อ ]", 
                    "paths":[ 
                        [ [], url_path("c8f74783d05dcb8f681ad1eaa6386139")],
                    ],
                    "condition": [
                        ["is_failed_examine_mimic", "=", 0],
                    ],
                    "results": [
                    ],
                    "results_w_condition":[

                        [[["is_kill_all_mimic", "=", 0]], ["Health Potion", "+", 5]],
                        [[], ["is_kill_all_mimic", "=", 1]],
                    ]
                },
            ],
        },
        "failed_examine_mimic":{
            "choices_detail":"คุณไม่พบความผิดปกติใดๆกับกล่องใบนี้",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ต่อ ]", 
                    "paths":[ 
                        [ [], url_path("693e69b499c6643254c24556070fccdd")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["is_failed_examine_mimic", "=", 1],
                    ]
                },
            ],
        },
        "success_examine_mimic":{
            "choices_detail":"คุณได้พบว่ากล่องนี้คือ Mimic แล้วได้ลอบสังหารมัน",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ต่อ ]", 
                    "paths":[ 
                        [ [], url_path("1e8f79f8b669533f0d8877a0e44ab5a5")],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ],
                    "results_w_condition":[

                        [[["is_kill_all_mimic", "=", 0]], ["Health Potion", "+", 5]],
                        [[], ["is_kill_all_mimic", "=", 1]],
                    ]
                },
            ],
        },
        //=========================================================================================
        "which_way_mimic":{
            "choices_detail":"คุณได้เดินทางจนมาพบเข้ากับอะไรบางอย่าง",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ต่อ ]", 
                    "paths":[ 
                        [ [["elf_joined_party", "<=", 0, "and"],
                        ["thief_joined_party", "<=", 0, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"],
                        ["first_time_mimic", "<=", 0, "and"]], url_path("1d291f38d052dc8a2e960449969990df")],
                        
                        [ [["elf_joined_party", "<=", 0, "and"],
                        ["thief_joined_party", "<=", 0, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"],
                        ["first_time_mimic", "=", 1, "and"]], url_path("940760d2e68e154f82263c5334523d71")],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "<=", 0, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"]], url_path("fea9a0554d006843b48fe89195724dbe")],
                        
                        [ [["elf_joined_party", "<=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"]], url_path("06ca8be73cf4d8f0118eef889afd3720")],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"]], url_path("17b66445c414698eb9542131f3002967")],
                        
                        [ [["is_kill_all_mimic", "=", 1, "and"]], url_path("fc2ad73f7fc7c13ab7a04e525c4f550e")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_mimic", "=", 1],
                    ],
                    "results_w_condition":[
                        
                        [ [["elf_joined_party", "<=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"]], ["Health Potion", "+", 5]],
                        [ [["elf_joined_party", "<=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"]], ["is_kill_all_mimic", "=", 1]],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"]], ["Health Potion", "+", 5]],
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"]], ["is_kill_all_mimic", "=", 1]],
                    ],
                },
            ],
        },
        //=========================================================================================
        "fight_mimic":{
            "choices_detail":"เทิร์นหลบการโจมตี Mimic",
            "condition": [
                ["how_good_can_fight", "!random", 35],
            ],
            "results": [
                ["HP", "-", 15],
                ["mimic_total_damage", "+", 15],
            ],
            "choices": [
                {
                    "detail":"[ หลบ ]", 
                    "paths":[ 
                        [ [["mimic_battle_rounds", "<=", 0]], "./index.html?select=results_fight_mimic"],
                        [ [["mimic_battle_rounds", ">", 0]], "./index.html?select=fight_mimic"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["mimic_battle_rounds", "-", 1],
                    ]
                },
            ],
        },
        "results_fight_mimic":{
            "choices_detail":"ดูผลลัพธ์การต่อสู้กับ Mimic",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ดูผลลัพธ์ ]", 
                    "paths":[ 
                        [ [["HP", "<=", 0]], "./index.html?choices=results_fight_mimic_died"],
                        [ [["mimic_total_damage", ">", 50]], "./index.html?choices=results_fight_mimic_almost_died"],
                        [ [["mimic_total_damage", ">", 0]], "./index.html?choices=results_fight_mimic_normal"],
                        [ [["mimic_total_damage", "=", 0]], "./index.html?choices=results_fight_mimic_perfect"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["mimic_battle_rounds", "=", 0]
                    ]
                },
            ],
        },
        "results_fight_mimic_died":{
            "choices_detail":"\\v[how_you_call_player]ได้พยายามจะต่อกรกับ Mimic แต่ความสามารถของคุณก็ไม่มากพอที่จะสู้กับศัตรูที่แข็งแกร่งขนาดนั้นได้"
            +" ร่างของคุณได้ถูกเจ้า Mimic กลืนกิน แล้วถูกย่อยกลายเป็นสารอาหารให้กับมัน",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ เริ่มต้นใหม่ ]", 
                    "paths":[ 
                        [ [], "./new_game.html"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "results_fight_mimic_almost_died":{
            "choices_detail":"\\v[how_you_call_player]ได้ต่อกรกับ Mimic แล้วสังหารมันได้ แต่คุณก็อยู่ในสภาพที่ปางตาย"
            +" คุณฝืนประคองตนเองไม้ให้ล้มลงไปในนอนกับพื้น แล้วพยายามกลั้นความเจ็บปวดพวกนั้นเอาไว้  [ได้รับ Health Potion x5]",
            "condition": [
                ["is_kill_all_mimic", "=", 0],
            ],
            "results": [
                ["is_kill_all_mimic", "=", 1],
                ["Health Potion", "+", 5],
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["first_time_library", "=", 0, "and"],
                            ["elf_joined_party", "=", 1],], url_path("11aab038572b47029067811edf87fb27")],

                        [ [["first_time_library", "=", 0]], url_path("08c58be1a3956c3a5cd74597c11a2aad")],

                        [ [["first_time_library", "=", 1, "and"],
                            ["is_corpse_clear", "=", 0],], url_path("e7d469bb44b5d54ca033b43d9d7dd7b4")],

                        [ [["first_time_library", "=", 1, "and"],
                            ["is_corpse_clear", "=", 1]], url_path("2bd20c7f1037d81a97a90bbae2c05fa6")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_library", "=", 1],
                    ],
                    "results_w_condition":[
                        [[["wolf_enable_to_attack", "=", 0, "and"],
                        ["wolf_enable_to_attack_delay", "=", 0, "and"]], ["wolf_enable_to_attack", "=", 1]],
        
                        [[["wolf_enable_to_attack_delay", ">", 0, "and"],], ["wolf_enable_to_attack_delay", "-", 1]],
                        [[], ["", "_enable_encounter", 0]]
                    ],
                },
                {
                    "detail":"[ เดินย้อนกลับไป ]", 
                    "paths":[ 
                        [ [["first_time_meet_elf", "<=", 0]], url_path("0e31233be036fd0d90051742775f932b")],
                        [ [["first_time_meet_elf", ">", 0, "and"],
                        ["is_elf_healed", "<=", 0 ]], url_path("9f760db6b3fca4d80f59cbc83dd9e64f")],
                        [ [["first_time_meet_elf", ">", 0, "and"],
                        ["is_elf_healed", ">", 1 ]], url_path("fade4e873058e43b06c7e053ada4785d")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_meet_elf", "=", 1],
                    ],
                    "results_w_condition":[
                        [[["wolf_enable_to_attack", "=", 0, "and"],
                        ["wolf_enable_to_attack_delay", "=", 0, "and"]], ["wolf_enable_to_attack", "=", 1]],
        
                        [[["wolf_enable_to_attack_delay", ">", 0, "and"],], ["wolf_enable_to_attack_delay", "-", 1]],
                        [[], ["", "_enable_encounter", 0]]
                    ],
                },
            ],
        },
        "results_fight_mimic_normal":{
            "choices_detail":"\\v[how_you_call_player]ได้ต่อกรกับ Mimic แล้วสังหารมันได้ ถึงแม้ว่าจะถูกโจมตีเข้ามาอยู่บ้าง"
            +" แต่คุณก็ไม่ได้รู้สึกว่าบาดแผลที่ได้รับมานั้นจะเป็นปัญหาสักเท่าไหร่  [ได้รับ Health Potion x5]",
            "condition": [
                ["is_kill_all_mimic", "=", 0],
            ],
            "results": [
                ["is_kill_all_mimic", "=", 1],
                ["Health Potion", "+", 5],
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["first_time_library", "=", 0, "and"],
                            ["elf_joined_party", "=", 1],], url_path("11aab038572b47029067811edf87fb27")],

                        [ [["first_time_library", "=", 0]], url_path("08c58be1a3956c3a5cd74597c11a2aad")],

                        [ [["first_time_library", "=", 1, "and"],
                            ["is_corpse_clear", "=", 0],], url_path("e7d469bb44b5d54ca033b43d9d7dd7b4")],

                        [ [["first_time_library", "=", 1, "and"],
                            ["is_corpse_clear", "=", 1]], url_path("2bd20c7f1037d81a97a90bbae2c05fa6")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_library", "=", 1],
                    ],
                    "results_w_condition":[
                        [[["wolf_enable_to_attack", "=", 0, "and"],
                        ["wolf_enable_to_attack_delay", "=", 0, "and"]], ["wolf_enable_to_attack", "=", 1]],
        
                        [[["wolf_enable_to_attack_delay", ">", 0, "and"],], ["wolf_enable_to_attack_delay", "-", 1]],
                        [[], ["", "_enable_encounter", 0]]
                    ],
                },
                {
                    "detail":"[ เดินย้อนกลับไป ]", 
                    "paths":[ 
                        [ [["first_time_meet_elf", "<=", 0]], url_path("0e31233be036fd0d90051742775f932b")],
                        [ [["first_time_meet_elf", ">", 0, "and"],
                        ["is_elf_healed", "<=", 0 ]], url_path("9f760db6b3fca4d80f59cbc83dd9e64f")],
                        [ [["first_time_meet_elf", ">", 0, "and"],
                        ["is_elf_healed", ">", 1 ]], url_path("fade4e873058e43b06c7e053ada4785d")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_meet_elf", "=", 1],
                    ],
                    "results_w_condition":[
                        [[["wolf_enable_to_attack", "=", 0, "and"],
                        ["wolf_enable_to_attack_delay", "=", 0, "and"]], ["wolf_enable_to_attack", "=", 1]],
        
                        [[["wolf_enable_to_attack_delay", ">", 0, "and"],], ["wolf_enable_to_attack_delay", "-", 1]],
                        [[], ["", "_enable_encounter", 0]]
                    ],
                },
            ],
        },
        "results_fight_mimic_perfect":{
            "choices_detail":"\\v[how_you_call_player]ได้ต่อกรกับ Mimic แล้วสังหารมันได้โดยไม่มีบาดแผลแม้แต่นิดเดียว [ได้รับ Health Potion x5]",
            "condition": [
                ["is_kill_all_mimic", "=", 0],
            ],
            "results": [
                ["is_kill_all_mimic", "=", 1],
                ["Health Potion", "+", 5],
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["first_time_library", "=", 0, "and"],
                            ["elf_joined_party", "=", 1],], url_path("11aab038572b47029067811edf87fb27")],

                        [ [["first_time_library", "=", 0]], url_path("08c58be1a3956c3a5cd74597c11a2aad")],

                        [ [["first_time_library", "=", 1, "and"],
                            ["is_corpse_clear", "=", 0],], url_path("e7d469bb44b5d54ca033b43d9d7dd7b4")],

                        [ [["first_time_library", "=", 1, "and"],
                            ["is_corpse_clear", "=", 1]], url_path("2bd20c7f1037d81a97a90bbae2c05fa6")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_library", "=", 1],
                    ],
                    "results_w_condition":[
                        [[["wolf_enable_to_attack", "=", 0, "and"],
                        ["wolf_enable_to_attack_delay", "=", 0, "and"]], ["wolf_enable_to_attack", "=", 1]],
        
                        [[["wolf_enable_to_attack_delay", ">", 0, "and"],], ["wolf_enable_to_attack_delay", "-", 1]],
                        [[], ["", "_enable_encounter", 0]]
                    ],
                },
                {
                    "detail":"[ เดินย้อนกลับไป ]", 
                    "paths":[ 
                        [ [["first_time_meet_elf", "<=", 0]], url_path("0e31233be036fd0d90051742775f932b")],
                        [ [["first_time_meet_elf", ">", 0, "and"],
                        ["is_elf_healed", "<=", 0 ]], url_path("9f760db6b3fca4d80f59cbc83dd9e64f")],
                        [ [["first_time_meet_elf", ">", 0, "and"],
                        ["is_elf_healed", ">", 1 ]], url_path("fade4e873058e43b06c7e053ada4785d")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_meet_elf", "=", 1],
                    ],
                    "results_w_condition":[
                        [[["wolf_enable_to_attack", "=", 0, "and"],
                        ["wolf_enable_to_attack_delay", "=", 0, "and"]], ["wolf_enable_to_attack", "=", 1]],

                        [[["wolf_enable_to_attack_delay", ">", 0, "and"],], ["wolf_enable_to_attack_delay", "-", 1]],
                        [[], ["", "_enable_encounter", 0]]
                    ],
                },
            ],
        },
    }
}