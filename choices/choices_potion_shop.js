choices_potion_shop = {
    "choose_choices":{
        "potions":{
            "choices_detail":"ภายในร้านขาย Potion คุณต้องการซื้ออะไร?",
            "condition": [
            ],
            "results": [
            ],
            "results_w_condition":[
                [[["how_good_can_you_talk", "=", 1]], ["cost_Health_Potion", "=", 30]],
                [[["how_good_can_you_talk", "=", 1]], ["cost_น้ำยาดับกลิ่นตัว", "=", 30]],
                [[["how_good_can_you_talk", "=", 1]], ["cost_กระดูกก็อบลิน", "=", 60]],
                [[["how_good_can_you_talk", "=", 1]], ["cost_เศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ", "=", 450]],
            ],
            "choices": [
                {
                    "detail":"“ท่านพอจะรู้วิธีการปรุงยา Pure Potion ไหม?”", 
                    "paths":[ 
                        [[], url_path("afcbc3e4d6ccb53921d7a63d33b31930")]
                    ],
                    "condition": [
                        ["found_back_story", "=", 1],
                    ],
                    "results": [
                        ["Pure Potion", "=", 1],
                    ]
                },
                {
                    "detail":"[ ขายกระดูกก็อบลิน ] [ ราคา \\v[cost_กระดูกก็อบลิน] ]", 
                    "paths":[ 
                        [[], ""]
                    ],
                    "condition": [
                        ["กระดูกก็อบลิน", ">", 0],
                    ],
                    "results": [
                        ["เงิน", "+", "\\v[cost_กระดูกก็อบลิน]"],
                        ["กระดูกก็อบลิน", "-", 1],
                    ]
                },
                {
                    "detail":"[ เศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ ] [ ราคา \\v[cost_เศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ] ]", 
                    "paths":[ 
                        [[], ""]
                    ],
                    "condition": [
                        ["เศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ", ">", 0],
                    ],
                    "results": [
                        ["เงิน", "+", "\\v[cost_เศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ]"],
                        ["เศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ", "-", 1],
                    ]
                },
                {
                    "detail":"[ ซื้อ Health Potion ] [ ราคา \\v[cost_Health_Potion] ]", 
                    "paths":[ 
                        [[], ""]
                    ],
                    "condition": [
                        ["เงิน", ">=", "\\v[cost_Health_Potion]"],
                    ],
                    "results": [
                        ["เงิน", "-", "\\v[cost_Health_Potion]"],
                        ["Health Potion", "+", 1],
                    ]
                },
                {
                    "detail":"[ ซื้อ Health Potion ] [ ราคา \\v[cost_Health_Potion]] (ไม่พอซื้อ) ", 
                    "paths":[ 
                        [[], ""]
                    ],
                    "condition": [
                        ["เงิน", "<", "\\v[cost_Health_Potion]"],
                    ],
                    "results": [
                    ]
                },
                {
                    "detail": "[ ซื้อน้ำยาลบกลิ่นตัว ] [ ราคา \\v[cost_น้ำยาดับกลิ่นตัว] ]",
                    "paths":[ 
                        [[], ""]
                    ],
                    "condition": [
                        ["เงิน", ">=", "\\v[cost_น้ำยาดับกลิ่นตัว]"],
                    ],
                    "results": [
                        ["เงิน", "-", "\\v[cost_น้ำยาดับกลิ่นตัว]"],
                        ["น้ำยาดับกลิ่นตัว", "+", 1],
                    ]
                },
                {
                    "detail":"[ ซื้อน้ำยาลบกลิ่นตัว ] [ ราคา \\v[cost_น้ำยาดับกลิ่นตัว]] (ไม่พอซื้อ) ", 
                    "paths":[ 
                        [[], ""]
                    ],
                    "condition": [
                        ["เงิน", "<", "\\v[cost_น้ำยาดับกลิ่นตัว]"],
                    ],
                    "results": [
                    ]
                },
                {
                    "detail": "[ แอบสุ่มขโมย Potion 1 ชิ้น ] (มีโอกาสเสียยาทุกขวด)",
                    "paths":[ 
                        [ [["how_good_can_you_steal", "random", 25]], "./index.html?choices=steal_sucess"],
                        [ [], "./index.html?choices=steal_fail"],
                    ],
                    "condition": [
                        ["no_more_steal", "<=", 0]
                    ],
                    "results": [
                    ]
                },
                {
                    "detail":"[ ขอให้หัวหน้าโจรขโมยขวด Health Potion จำนวนหนึ่งให้ ]", 
                    "paths":[ 
                        [ [], "./index.html?choices=potions"],
                    ],
                    "condition": [
                        ["thief_joined_party", "=", 1],
                        ["is_thief_steal_potion_yet", "=", 0]
                    ],
                    "results": [
                        ["Health Potion", "+", 7],
                        ["is_thief_steal_potion_yet", "=", 1]
                    ]
                },
                {
                    "nickname": "village",
                    "detail": "[ เดินทางกลับไปยังใจกลางหมู่บ้าน ]",
                    "paths":[ 
                        [ [["first_time_vilage", "<=", 0]], url_path("bd13952e7fb4941dd0cee6e9cee2b308")],
                        [ [["first_time_vilage", ">", 0]], url_path("a38c26dd9174fa2e2e01cb6f21cd8b13")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_vilage", "=", 1],
                    ]
                },
            ],
        },
        //========================================================================
        //Results in steal.
        "steal_sucess":{
            "choices_detail":"ตอนที่เจ้าของร้านเผลอ คุณจึงได้โอกาสที่จะฉกยา Potion มา 1 ขวด",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ขโมย Health Potion 1 ขวด ]", 
                    "paths":[ 
                        [ [], "./index.html?choices=potions"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["Health Potion", "+", 1],
                    ]
                },
                {
                    "detail":"[ ขโมยยาดับกลิ่น 1 ขวด ]", 
                    "paths":[ 
                        [ [], "./index.html?choices=potions"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["น้ำยาดับกลิ่นตัว", "+", 1],
                    ]
                },
                {
                    "detail":"[ กลับใจแล้วเลือกที่จะไม่ขโมย ]", 
                    "paths":[ 
                        [ [], "./index.html?choices=potions"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "steal_fail":{
            "choices_detail":"ตอนที่เจ้าของร้านเผลอ คุณได้พยายามแอบฉกยา Potion ที่อยู่ใกล้ตัว แต่ชายแก่ก็หันกลับมามองซะก่อน "
            +"เขาชี้หน้าคุณแล้วบังคับให้คุณส่ง Potion ทั้งหมดที่มีในตัว แล้วเขาจะไม่เอาเรื่อง",
            "condition": [
            ],
            "results": [
                ["no_more_steal", "=", 1],
            ],
            "choices": [
                {
                    "detail":"[ ต่อไป ]", 
                    "paths":[ 
                        [ [], "./index.html?choices=potions"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["Health Potion", "=", 0],
                        ["น้ำยาดับกลิ่นตัว", "=", 0],
                    ]
                },
            ],
        },
    }
}