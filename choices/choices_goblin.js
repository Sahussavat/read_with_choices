choices_goblin = {
    "choose_choices":{
        "goblin_option":{
            "choices_detail":"คุณจะทำอย่างไรกับพวกก็อบลินติดเชื้อกำลังขวางเส้นทางของคุณ?",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "nickname":"fight_goblins",
                    "detail":"[ สู้ ]", 
                    "paths":[ 
                        [ [], "./index.html?select=fight_goblins"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
                {
                    "nickname":"perception_check",
                    "detail": "[ สังเกตรอบๆพื้นที่ ]",
                    "paths":[ 
                        [ [["how_good_can_you_see", "=", 1, "or"],
                            ["", "random", 50],], url_path("6da0fb188476a193856af8ff82da2abc")],
                        [[], url_path("b7310f0bbccec40c9ac078b3e12a2119")]
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "kill_goblin_w_trap":{
            "choices_detail":"คุณจะแก้ไขกับดักเพื่อสังหารพวกก็อบลินหรือไม่?",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ แก้กับดัก ]", 
                    "paths":[ 
                        [ [["้how_good_can_you_fix", "=", 1, "or"],
                        ["", "random", 50],], "./index.html?select=kill_goblin_w_trap_success"],
                        [ [], url_path("b7310f0bbccec40c9ac078b3e12a2119")],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "kill_goblin_w_trap_success":{
            "choices_detail":"คุณได้แก้ไขกับดักสำเร็จ",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ไปต่อ ]", 
                    "paths":[ 
                        [ [], url_path("636cb7d3ef567f8288379f47193142e3")],
                    ],
                    "condition": [
                        ["is_kill_all_goblins", "=", 0],
                    ],
                    "results": [
                        ["is_kill_all_goblins", "=", 1],
                        ["กระดูกก็อบลิน", "+", 3],
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
        "goblin_pass":{
            "choices_detail":"คุณได้กลับมายังพื้นที่ที่ได้สังหารเหล่าก็อบลิน คุณจะทำอย่างไรต่อ?",
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
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
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
                {
                    "nickname": "go_back",
                    "detail":"[ กลับไปยังแคมป์ของเหล่ากองโจร ]", 
                    "paths":[ 
                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                            ["is_kill_all_thiefs", "=", 0, "and"],
                            ["find_missing_finish", "=", 0, "and"],], url_path("92e88c7fc5357ac792a28cf2aa87c7e1")],
                        
                        [ [["first_time_camp", "<=", 0]], url_path("14c9089484180a1fb343b9775c57971f")],
                        [ [["first_time_camp", ">", 0, "and"],
                            ["is_kill_all_thiefs", "<=", 0]], url_path("3a9b0ee5fb3bf10a8f61f20c4ba7d111")],
                        [ [["first_time_camp", ">", 0, "and"],
                            ["is_kill_all_thiefs", ">", 0]], url_path("29a91b13e895e074f190fe110d8762b4")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_enter_dungeon", "=", 1],
                    ],
                    "results_w_condition":[
                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["thief_joined_party", "=", 1]],

                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["find_missing_finish", "=", 0, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["how_good_can_fight", "+", 15]],

                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["find_missing_finish", "=", 1]],

                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["ศพของสมาชิกกองโจร", "=", 0]],
                        
                        [[["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],], ["how_you_call_player", "=", "คุณกับพรรคพวก"]],
                        
                        [[["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],], ["how_you_call_player", "=", "คุณกับหัวหน้ากองโจร"]]
                    ],
                },
            ],
        },
        //==========================================================================================
        "fight_goblins":{
            "choices_detail":"เทิร์นหลบการโจมตีพวกก็อบลิน",
            "condition": [
                ["how_good_can_fight", "!random", 50],
            ],
            "results": [
                ["HP", "-", 15],
                ["goblins_total_damage", "+", 15],
            ],
            "choices": [
                {
                    "detail":"[ หลบ ]", 
                    "paths":[ 
                        [ [["goblins_battle_rounds", "<=", 0]], "./index.html?select=results_fight_goblins"],
                        [ [["goblins_battle_rounds", ">", 0]], "./index.html?select=fight_goblins"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["goblins_battle_rounds", "-", 1],
                    ]
                },
            ],
        },
        "results_fight_goblins":{
            "choices_detail":"ดูผลลัพธ์การต่อสู้กับพวกก็อบลิน",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ดูผลลัพธ์ ]", 
                    "paths":[ 
                        [ [["HP", "<=", 0]], "./index.html?choices=results_fight_goblins_died"],
                        [ [["goblins_total_damage", ">", 50]], "./index.html?choices=results_fight_goblins_almost_died"],
                        [ [["goblins_total_damage", ">", 0]], "./index.html?choices=results_fight_goblins_normal"],
                        [ [["goblins_total_damage", "=", 0]], "./index.html?choices=results_fight_goblins_perfect"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["goblins_battle_rounds", "=", 0]
                    ]
                },
            ],
        },
        "results_fight_goblins_died":{
            "choices_detail":"\\v[how_you_call_player]ได้พยายามจะต่อกรกับพวกก็อบลิน แต่ความสามารถของคุณก็ไม่มากพอที่จะสู้กับศัตรูที่มีจำนวนเยอะกว่าได้"
            +" ศีรษะของคุณได้ถูกตัดออกจากบ่า แล้วร่างของคุณได้ก็ล้มนอนลง...กลายเป็นซากศพที่ถูกทิ้งไว้ภายในโบราณสถานแห่งนี้",
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
        "results_fight_goblins_almost_died":{
            "choices_detail":"\\v[how_you_call_player]ได้ต่อกรกับพวกก็อบลิน แล้วสังหารพวกมันทุกตัวจนหมด แต่คุณก็อยู่ในสภาพที่ปางตาย"
            +" คุณฝืนประคองตนเองไม้ให้ล้มลงไปในนอนกับพื้น แล้วพยายามกลั้นความเจ็บปวดพวกนั้นเอาไว้ [ได้รับกระดูกก็อบลิน x3]",
            "condition": [
                ["is_kill_all_goblins", "=", 0],
            ],
            "results": [
                ["is_kill_all_goblins", "=", 1],
                ["กระดูกก็อบลิน", "+", 3],
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
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
                {
                    "detail":"[ กลับไปยังแคมป์ของเหล่ากองโจร ]", 
                    "paths":[ 
                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                            ["is_kill_all_thiefs", "=", 0, "and"],
                            ["find_missing_finish", "=", 0, "and"],], url_path("92e88c7fc5357ac792a28cf2aa87c7e1")],
                        
                        [ [["first_time_camp", "<=", 0]], url_path("14c9089484180a1fb343b9775c57971f")],
                        [ [["first_time_camp", ">", 0, "and"],
                            ["is_kill_all_thiefs", "<=", 0]], url_path("3a9b0ee5fb3bf10a8f61f20c4ba7d111")],
                        [ [["first_time_camp", ">", 0, "and"],
                            ["is_kill_all_thiefs", ">", 0]], url_path("29a91b13e895e074f190fe110d8762b4")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_enter_dungeon", "=", 1],
                    ],
                    "results_w_condition":[
                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["thief_joined_party", "=", 1]],

                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["find_missing_finish", "=", 0, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["how_good_can_fight", "+", 15]],

                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["find_missing_finish", "=", 1]],

                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["ศพของสมาชิกกองโจร", "=", 0]],
                        
                        [[["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],], ["how_you_call_player", "=", "คุณกับพรรคพวก"]],
                        
                        [[["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],], ["how_you_call_player", "=", "คุณกับหัวหน้ากองโจร"]]
                    ],
                },
            ],
        },
        "results_fight_goblins_normal":{
            "choices_detail":"\\v[how_you_call_player]ได้ต่อกรกับพวกก็อบลิน แล้วสังหารพวกมันทุกตัวจนหมด ถึงแม้ว่าจะถูกโจมตีเข้ามาอยู่บ้าง"
            +" แต่คุณก็ไม่ได้รู้สึกว่าบาดแผลที่ได้รับมานั้นจะเป็นปัญหาสักเท่าไหร่  [ได้รับกระดูกก็อบลิน x3]",
            "condition": [
                ["is_kill_all_goblins", "=", 0],
            ],
            "results": [
                ["is_kill_all_goblins", "=", 1],
                ["กระดูกก็อบลิน", "+", 3],
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
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
                {
                    "detail":"[ กลับไปยังแคมป์ของเหล่ากองโจร ]", 
                    "paths":[ 
                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                            ["is_kill_all_thiefs", "=", 0, "and"],
                            ["find_missing_finish", "=", 0, "and"],], url_path("92e88c7fc5357ac792a28cf2aa87c7e1")],
                        
                        [ [["first_time_camp", "<=", 0]], url_path("14c9089484180a1fb343b9775c57971f")],
                        [ [["first_time_camp", ">", 0, "and"],
                            ["is_kill_all_thiefs", "<=", 0]], url_path("3a9b0ee5fb3bf10a8f61f20c4ba7d111")],
                        [ [["first_time_camp", ">", 0, "and"],
                            ["is_kill_all_thiefs", ">", 0]], url_path("29a91b13e895e074f190fe110d8762b4")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_enter_dungeon", "=", 1],
                    ],
                    "results_w_condition":[
                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["thief_joined_party", "=", 1]],

                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["find_missing_finish", "=", 0, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["how_good_can_fight", "+", 15]],

                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["find_missing_finish", "=", 1]],

                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["ศพของสมาชิกกองโจร", "=", 0]],
                        
                        [[["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],], ["how_you_call_player", "=", "คุณกับพรรคพวก"]],
                        
                        [[["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],], ["how_you_call_player", "=", "คุณกับหัวหน้ากองโจร"]]
                    ],
                },
            ],
        },
        "results_fight_goblins_perfect":{
            "choices_detail":"\\v[how_you_call_player]ได้ต่อกรกับพวกก็อบลิน แล้วสังหารพวกมันทุกตัวจนหมดโดยไม่มีบาดแผลแม้แต่นิดเดียว"
            +"  [ได้รับกระดูกก็อบลิน x3]",
            "condition": [
                ["is_kill_all_goblins", "=", 0],
            ],
            "results": [
                ["is_kill_all_goblins", "=", 1],
                ["กระดูกก็อบลิน", "+", 3],
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
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
                {
                    "detail":"[ กลับไปยังแคมป์ของเหล่ากองโจร ]", 
                    "paths":[ 
                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                            ["is_kill_all_thiefs", "=", 0, "and"],
                            ["find_missing_finish", "=", 0, "and"],], url_path("92e88c7fc5357ac792a28cf2aa87c7e1")],
                        
                        [ [["first_time_camp", "<=", 0]], url_path("14c9089484180a1fb343b9775c57971f")],
                        [ [["first_time_camp", ">", 0, "and"],
                            ["is_kill_all_thiefs", "<=", 0]], url_path("3a9b0ee5fb3bf10a8f61f20c4ba7d111")],
                        [ [["first_time_camp", ">", 0, "and"],
                            ["is_kill_all_thiefs", ">", 0]], url_path("29a91b13e895e074f190fe110d8762b4")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_enter_dungeon", "=", 1],
                    ],
                    "results_w_condition":[
                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["thief_joined_party", "=", 1]],

                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["find_missing_finish", "=", 0, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["how_good_can_fight", "+", 15]],

                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["find_missing_finish", "=", 1]],

                        [ [["ศพของสมาชิกกองโจร", "=", 1, "and"],
                        ["is_kill_all_thiefs", "=", 0]], ["ศพของสมาชิกกองโจร", "=", 0]],
                        
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