choices_dungeon_meet_elf = {
    "choose_choices":{
        "meet_elf":{
            "choices_detail":"คุณได้พบกับเอลฟ์ที่บาดเจ็บ คุณจะทำอย่างไรต่อ?",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "nickname":"give_hp_potion",
                    "detail":"[ มอบยา Health Potion ให้กับเธอ 1 ขวด ]", 
                    "paths":[ 
                        [ [], url_path("43b35a59bb302950c0f2ab45318d5a99")],
                    ],
                    "condition": [
                        ["Health Potion", ">", 0],
                    ],
                    "results": [
                        ["Health Potion", "-", 1],
                        ["is_elf_healed", "=", 1],
                        ["elf_joined_party", "=", 1],
                        ["how_good_can_fight", "+", 15],
                        ["how_you_call_player", "=", "คุณกับหญิงสาวชาวเอลฟ์"],
                    ],
                    "results_w_condition":[
                        [[["thief_joined_party", "=", 1]], ["how_you_call_player", "=", "คุณกับพรรคพวก"]]
                    ]
                },
                {
                    "nickname":"ignore",
                    "detail": "[ ไม่สนใจแล้วเดินทางไปต่อ ]",
                    "paths":[ 
                        [ [["elf_joined_party", "<=", 0, "and"],
                        ["thief_joined_party", "<=", 0, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"]
                        ["first_time_mimic", "<=", 0, "and"]], url_path("1d291f38d052dc8a2e960449969990df")],
                        
                        [ [["elf_joined_party", "<=", 0, "and"],
                        ["thief_joined_party", "<=", 0, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"]
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
                        [[["wolf_enable_to_attack", "=", 0, "and"],
                        ["wolf_enable_to_attack_delay", "=", 0, "and"]], ["wolf_enable_to_attack", "=", 1]],

                        [[["wolf_enable_to_attack_delay", ">", 0, "and"],], ["wolf_enable_to_attack_delay", "-", 1]],
                        [[], ["", "_enable_encounter", 0]]
                    ],
                },
                {
                    "nickname":"go_back",
                    "detail": "[ เดินทางกลับไปยังสถานที่ที่ได้สังหารเหล่าก็อบลิน ]",
                    "paths":[ 
                        [ [["first_time_goblin", "<=", 0]], url_path("e99e019a881fe7638c28abb0829930a9")],
                        [ [["first_time_goblin", ">", 0]], url_path("cd8ba1339a2c6d7bf83abd0c3a8d5130")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_goblin", "=", 1],
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
        "used_to_meet_elf":{
            "choices_detail":"คุณได้กลับมายังสถานที่ที่คุณได้ช่วยเหลือหญิงสาวชาวเอลฟ์ไว้",
            "condition": [
            ],
            "results": [
            ],
            "results_w_condition":[
                [[["wolf_enable_to_attack", "=", 0, "and"],
                ["wolf_enable_to_attack_delay", "=", 0, "and"]], ["wolf_enable_to_attack", "=", 1]],

                [[["wolf_enable_to_attack_delay", ">", 0, "and"],], ["wolf_enable_to_attack_delay", "-", 1]],
                [[], ["", "_enable_encounter", 0]]
            ],
            "choices": [
                {
                    "nickname":"go_next",
                    "detail":"[ ไปต่อ ]", 
                    "paths":[ 
                        [ [["elf_joined_party", "<=", 0, "and"],
                        ["thief_joined_party", "<=", 0, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"]
                        ["first_time_mimic", "<=", 0, "and"]], url_path("1d291f38d052dc8a2e960449969990df")],
                        
                        [ [["elf_joined_party", "<=", 0, "and"],
                        ["thief_joined_party", "<=", 0, "and"],
                        ["is_kill_all_mimic", "<=", 0, "and"]
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
                        [[["wolf_enable_to_attack", "=", 0, "and"],
                        ["wolf_enable_to_attack_delay", "=", 0, "and"]], ["wolf_enable_to_attack", "=", 1]],

                        [[["wolf_enable_to_attack_delay", ">", 0, "and"],], ["wolf_enable_to_attack_delay", "-", 1]],
                        [[], ["", "_enable_encounter", 0]]
                    ],
                },
                {
                    "nickname":"go_back",
                    "detail": "[ เดินทางกลับไปยังสถานที่ที่ได้สังหารเหล่าก็อบลิน ]",
                    "paths":[ 
                        [ [["first_time_goblin", "<=", 0]], url_path("e99e019a881fe7638c28abb0829930a9")],
                        [ [["first_time_goblin", ">", 0]], url_path("cd8ba1339a2c6d7bf83abd0c3a8d5130")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_goblin", "=", 1],
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