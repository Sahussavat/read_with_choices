choice_dungeon_ritual = {
    "choose_choices":{
        "found_ritual":{
            "choices_detail":"คุณได้เดินทางจนมาถึงแท่นทำพิธีกรรม คุณจะทำอย่างไรต่อไป?",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ใช้น้ำยา Pure Potion ]", 
                    "paths":[ 
                        [ [["thief_joined_party", "=", 0]], url_path("ebf9ae1855fad873a51a719bbce7608c")],
                        [ [["thief_joined_party", "=", 1]], url_path("b839f5608e0068a7b7f2737f529cf2ce")],
                    ],
                    "condition": [
                        ["found_back_story", "=", 1, "and"],
                        ["Pure Potion", "=", 1],
                    ],
                    "results": [
                        ["is_yana_safe", "=", 1],
                        ["Pure Potion", "-", 1],
                        ["is_plague_end", "=", 1],
                    ]
                },
                {
                    "detail": "[ ใช้เลือดบริสุทธิ์ของหญิงสาวชาวเอลฟ์ ]",
                    "paths":[ 
                        [ [["thief_joined_party", "=", 0]], url_path("c722fe65b57bc73006ebc51ef79294d2")],
                        [ [["thief_joined_party", "=", 1]], url_path("638949d79c60bda291fa253bb664818d")],
                    ],
                    "condition": [
                        ["found_back_story", "=", 1, "and"],
                        ["Pure Potion", "=", 0],
                    ],
                    "results": [
                        ["is_elf_dead", "=", 1],
                        ["is_plague_end", "=", 1],
                    ]
                },
                {
                    "detail": "[ ทำลายเครื่องจักรบนแท่นพิธีทิ้ง ]",
                    "paths":[ 
                        [ [], url_path("edf80dac220da528a4261a850b56409a")],
                    ],
                    "condition": [
                        ["found_back_story", "=", 0],
                    ],
                    "results": [
                    ]
                },
            ],
        },
        //=========================================================================================================
        "fight_final":{
            "choices_detail":"เทิร์นหลบการโจมตีหมาป่ายักษ์",
            "condition": [
                ["how_good_can_fight", "!random", 30],
            ],
            "results": [
                ["HP", "-", 19],
            ],
            "choices": [
                {
                    "detail":"[ หลบ ]", 
                    "paths":[ 
                        [ [["final_battle_rounds", "<=", 0]], "./index.html?select=results_fight_final"],
                        [ [["final_battle_rounds", ">", 0]], "./index.html?select=fight_final"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["final_battle_rounds", "-", 1],
                    ]
                },
            ],
        },
        "results_fight_final":{
            "choices_detail":"ดูผลลัพธ์การต่อสู้กับหมาป่ายักษ์",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ดูผลลัพธ์ ]", 
                    "paths":[ 
                        [ [["HP", "<=", 0]], "./index.html?choices=results_fight_final_died"],
                        [ [["HP", ">", 0, "and"]], "./index.html?choices=results_fight_final_almost_died"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["final_battle_rounds", "=", 0]
                    ]
                },
            ],
        },
        "results_fight_final_died":{
            "choices_detail":"\\v[how_you_call_player]ได้พยายามจะต่อกรกับหมาป่ายักษ์ "
            +"แต่ความสามารถของคุณก็ไม่มากพอที่จะสู้กับศัตรูที่แข็งแกร่งขนาดนั้นได้"
            +" ร่างของคุณได้ถูกเจ้าหมาป่ายักษ์ฉีกกระชากหน้าท้อง แล้วถูกมันกินอวัยวะภายในทั้งเป็น ",
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
        "results_fight_final_almost_died":{
            "choices_detail":"\\v[how_you_call_player]พยายามที่จะถ่วงเวลา แต่คุณก็อยู่ในสภาพที่ร่อแร่เต็มทีแล้ว",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["found_back_story", "=", 1, "and"],
                        ["Pure Potion", "=", 1],], url_path("6ad041b67f39443091a0076cc28ff073")],
                        
                        [ [["found_back_story", "=", 1, "and"],
                        ["Pure Potion", "=", 0],], url_path("2cbdd1feba7e72def167d4700e078aea")],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
    }
}