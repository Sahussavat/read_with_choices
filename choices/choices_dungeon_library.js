choices_dungeon_library = {
    "choose_choices":{
        "library_which_way":{
            "choices_detail":"คุณได้เดินทางมาถึงห้องโถงที่เต็มไปด้วยหนังสือ คุณจะทำอย่างไรต่อไป?",
            "condition": [
            ],
            "results": [
                ["wolf_enable_to_attack", "=", 0],
            ],
            "results_w_condition":[
                [[["elf_joined_party", "=", 1]], ["is_secret_way_opened", "=", 1]],
            ],
            "choices": [
                {
                    "detail":"[ จัดการศพแล้วแบกขึ้นหลัง ]", 
                    "paths":[ 
                        [ [], url_path("242b973a72d483bf91767d7b9fbbe517")],
                    ],
                    "condition": [
                        ["is_corpse_clear", "=", 0]
                    ],
                    "results": [
                        ["is_corpse_clear", "=", 1],
                        ["ศพของสมาชิกกองโจร", "=", 1]
                    ]
                },
                {
                    "detail":"[ สำรวจพื้นที่ ]", 
                    "paths":[ 
                        [ [["how_good_can_you_see", "=", 1, "or"],
                        ["", "random", 50],], url_path("8868c9d18d601244f95ab083a0560522")],

                        [ [], "./index.html?choices=failed_find_secret_way"],
                    ],
                    "condition": [
                        ["is_secret_way_opened", "=", 0, "and"],
                        ["is_failed_found_secret_way", "=", 0]
                    ],
                    "results": [
                    ],
                    "results_w_condition":[
                    ],
                },
                {
                    "detail":"[ ใช้ทางลัดเพื่อไปยังแคมป์ของกองโจร ]", 
                    "paths":[ 
                        [ [["first_time_use_secret_way", "=", 0, "and"],
                            ["is_kill_all_thiefs", "=", 0]], url_path("855a2fd464258f5efdf00e66dfa24325")],
                        [ [["first_time_use_secret_way", "=", 0, "and"],
                            ["is_kill_all_thiefs", "=", 1]], url_path("678cafd0e2ddcb2eece6092a07bc1cc6")],
                    ],
                    "condition": [
                        ["is_secret_way_opened", "=", 1]
                    ],
                    "results": [
                        ["first_time_use_secret_way", "=", 1],
                    ]
                },
                {
                    "detail":"[ เดินทางไปต่อ ]", 
                    "paths":[ 
                        [ [["first_time_lab", "=", 0, "and"],
                        ["is_lab_door_opened", "=", 0, "and"],
                        ["found_back_story", "=", 0, "and"],
                        ["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 0, "and"],], url_path("b718972ebbef053d7a3df0c245176933")],
                        
                        [ [["first_time_lab", "=", 0, "and"],
                        ["is_lab_door_opened", "=", 0, "and"],
                        ["found_back_story", "=", 0, "and"],
                        ["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 0, "and"],], url_path("d36ab037ffaa16166912aadbeaddaa2d")],
                        
                        [ [["first_time_lab", "=", 0, "and"],
                        ["is_lab_door_opened", "=", 0, "and"],
                        ["found_back_story", "=", 0, "and"],
                        ["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 0, "and"],], url_path("2cbbdf4aed20e2385d37e3ac7f453595")],
                        
                        [ [["first_time_lab", "=", 0, "and"],
                        ["is_lab_door_opened", "=", 0, "and"],
                        ["found_back_story", "=", 0, "and"],
                        ["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],], url_path("650d811a059f6afcd8627e9756a32125")],
                        
                        [ [["first_time_lab", "=", 1, "and"],
                        ["is_lab_door_opened", "=", 0, "and"],], url_path("852a76faeee84556db7148808e89404f")],
                        
                        [ [["first_time_lab", "=", 1, "and"],
                        ["is_lab_door_opened", "=", 1, "and"],
                        ["found_back_story", "=", 1, "and"],], url_path("7453793eaf83282fb109b70587451ea7")],

                        [ [["first_time_lab", "=", 1, "and"],
                        ["is_lab_door_opened", "=", 1, "and"],
                        ["found_back_story", "=", 0, "and"],], url_path("8e6a8482e8f252b167b0f552511a4894")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_lab", "=", 1],
                    ]
                },
                {
                    "detail": "[ เดินย้อนกลับไป ]",
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
                    ]
                },
            ],
        },
        "failed_find_secret_way":{
            "choices_detail":"คุณได้เดินสำรวจบริเวณโดยรอบ แต่ก็ไม่พบอะไรที่น่าสนใจ",
            "condition": [
            ],
            "results": [
                ["is_failed_found_secret_way", "=", 1]
            ],
            "results_w_condition":[
            ],
            "choices": [
                {
                    "detail":"[ กลับไปยังใจกลางห้อง ]", 
                    "paths":[ 
                        [ [], "./index.html?choices=library_which_way"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "success_find_secret_way":{
            "choices_detail":"คุณได้เดินสำรวจบริเวณโดยรอบ แล้วได้พบกับทางลับ",
            "condition": [
            ],
            "results": [
                ["is_failed_found_secret_way", "=", 0],
                ["is_secret_way_opened", "=", 1]
            ],
            "results_w_condition":[
            ],
            "choices": [
                {
                    "detail":"[ กลับไปยังใจกลางห้อง ]", 
                    "paths":[ 
                        [ [], "./index.html?choices=library_which_way"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "use_secret_way":{
            "choices_detail":"คุณได้เดินทางโดยใช้ทางลับไปยังแคมป์ของกองโจร",
            "condition": [
            ],
            "results": [
                ["wolf_enable_to_attack", "=", 0],
            ],
            "choices": [
                {
                    "detail":"[ ต่อ ]", 
                    "paths":[
                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                            ["is_kill_all_thiefs", "=", 0]], url_path("92e88c7fc5357ac792a28cf2aa87c7e1")],
                        
                        [ [["first_time_camp", "<=", 0]], url_path("14c9089484180a1fb343b9775c57971f")],
                        [ [["first_time_camp", ">", 0, "and"],
                            ["is_kill_all_thiefs", "<=", 0]], url_path("3a9b0ee5fb3bf10a8f61f20c4ba7d111")],
                        [ [["first_time_camp", ">", 0, "and"],
                            ["is_kill_all_thiefs", ">", 0]], url_path("29a91b13e895e074f190fe110d8762b4")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_use_secret_way", "=", 1],
                        ["first_time_camp", "=", 1],
                    ],
                    "results_w_condition":[
                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], [
                            ["find_missing_finish", "=", 1],
                            ["ศพของสมาชิกกองโจร", "=", 0],
                            ["thief_joined_party", "=", 1],
                            ["how_good_can_fight", "+", 15],
                        ]],
                        
                        [[["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],], ["how_you_call_player", "=", "คุณกับพรรคพวก"]],
                        
                        [[["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],], ["how_you_call_player", "=", "คุณกับหัวหน้ากองโจร"]]
                    ],
                },
            ],
        },
    }
}