choices_research_lab = {
    "choose_choices":{
        "found_lab_door_first":{
            "choices_detail":"คุณได้พบกับประตูปริศนาที่ถูกล็อกอยู่ คุณจะทำอย่างไร",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ใช้ชะแลงงัดประตู ]", 
                    "paths":[ 
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 0, "and"],], url_path("044ffbc26df84c866dc04453a71d928a")],
                        
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],], url_path("c28f77927b81d34de265336faf85ce41")],
                        
                        [ [["elf_joined_party", "=", 1, "and"]], url_path("bedd9141e99d73a79f20dfa536c23423")],
                    ],
                    "condition": [
                        ["ชะแลง", ">=", 1, "and"],
                        ["is_lab_door_opened", "=", 0],
                    ],
                    "results": [
                        ["is_lab_door_opened", "=", 1],
                    ],
                    "results_w_condition":[
                        [ [["elf_joined_party", "=", 1, "and"]], ["found_back_story", "=", 1]],
                    ],
                },
                {
                    "detail":"[ ไม่สนใจแล้วไปต่อ ]", 
                    "paths":[ 
                        [ [["elf_joined_party", "=", 0, "and"],
                            ["thief_joined_party", "=", 0]], url_path("d4589c639f97839b2406d69e5039a9fc")],
                            
                        [ [["elf_joined_party", "=", 1, "or"],
                        ["thief_joined_party", "=", 1]], url_path("c12bf7103149a284cdd091eb3b2722f0")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_ritual", "=", 1]
                    ]
                },
                {
                    "detail": "[ ย้อนกลับไปยังห้องที่เต็มไปด้วยชั้นหนังสือ ]",
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
                    ]
                },
            ],
        },
        "found_lab_door_again":{
            "choices_detail":"คุณได้พบกับทางเดินซึ่งมีประตูสู่ห้องวิจัย คุณจะทำอย่างไร",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ใช้ชะแลงงัดประตู ]", 
                    "paths":[ 
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 0, "and"],], url_path("044ffbc26df84c866dc04453a71d928a")],
                        
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],], url_path("c28f77927b81d34de265336faf85ce41")],
                        
                        [ [["elf_joined_party", "=", 1, "and"]], url_path("bedd9141e99d73a79f20dfa536c23423")],
                    ],
                    "condition": [
                        ["ชะแลง", ">=", 1, "and"],
                        ["is_lab_door_opened", "=", 0],
                    ],
                    "results": [
                        ["is_lab_door_opened", "=", 1],
                    ],
                    "results_w_condition":[
                        [ [["elf_joined_party", "=", 1, "and"]], ["found_back_story", "=", 1]],
                    ],
                },
                {
                    "detail":"[ พาหญิงสาวไปดูบันทึกที่เขียนด้วยภาษาเอลฟ์ ]", 
                    "paths":[ 
                        [ [], url_path("523f8dbd4c0fca12f50aca4510a42401")],
                    ],
                    "condition": [
                        ["is_lab_door_opened", "=", 1],
                        ["elf_joined_party", "=", 1],
                    ],
                    "results": [
                        ["found_back_story", "=", 1]
                    ]
                },
                {
                    "detail":"[ เดินทางไปต่อ ]", 
                    "paths":[ 
                        [ [["elf_joined_party", "=", 0, "and"],
                            ["thief_joined_party", "=", 0]], url_path("d4589c639f97839b2406d69e5039a9fc")],
                            
                        [ [["elf_joined_party", "=", 1, "or"],
                        ["thief_joined_party", "=", 1]], url_path("c12bf7103149a284cdd091eb3b2722f0")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_ritual", "=", 1]
                    ]
                },
                {
                    "detail": "[ ย้อนกลับไปยังห้องที่เต็มไปด้วยชั้นหนังสือ ]",
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
                    ]
                },
            ],
        },
    }
}