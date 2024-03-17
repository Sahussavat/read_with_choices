choice_result = {
    "choose_choices":{
        "result_of_story":{
            "choices_detail":"ดูผลลัพธ์จากเรื่องราวทั้งหมด",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "nickname":"elf_result",
                    "detail":"[ ชะตากรรมของหญิงสาวชาวเอลฟ์ ]", 
                    "paths":[ 
                        [ [["is_elf_healed", "=", 0]], url_path("683bc7812dfbf5658e87d1398b3d2507")],

                        [ [["is_elf_healed", "=", 1, "and"],
                            ["found_back_story", "=", 0, "and"]], url_path("45beaa60d41b1e0f3b8c516c0689c692")],

                        [ [["is_elf_dead", "=", 1, "and"],
                            ["found_back_story", "=", 1, "and"]], url_path("027d5d740b51ad9b27337faca3bd3e52")],
                            
                        [ [["is_yana_safe", "=", 1, "and"],
                            ["found_back_story", "=", 1, "and"]], url_path("10e08710e0922639b76421bdd657e6a2")],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
                {
                    "nickname":"thief_result",
                    "detail": "[ ชะตากรรมของหัวหน้ากองโจร ]",
                    "paths":[ 
                        [ [["is_kill_all_thiefs", "=", 1]], url_path("a0bd6d3abd40e4e5ac1f90a958ffca15")],
                        [ [["find_missing_finish", "=", 0]], url_path("b9f98f4ef453c551418755d245eb00c6")],
                        [ [["find_missing_finish", "=", 1]], url_path("4ac41e26096c28f8289c7ff7af22e360")],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
                {
                    "nickname":"player_result",
                    "detail": "[ ชะตากรรมของคุณ ]",
                    "paths":[ 
                        [ [["is_plague_clear", "=", 0]], url_path("5d7ab000fe2eefda249ec6f138396577")],
                        [ [["is_plague_clear", "=", 1]], url_path("49f2e5f085ada6087e129de898ab3b03")],
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