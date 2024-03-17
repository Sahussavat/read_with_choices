
abilities = {
    "แต้ม Ability": {
        "current_val": 4,
        "type": "item",
        "show": true,
    },
    //===============================================================================================
    "นักสู้มืออาชีพ": {
        "current_val": 1,
        "type": "item",
        "show": true,
        "item_detail": "โอกาสได้รับบาดแผลจากการต่อสู้น้อยลง",
        "usable": true,
        "condition": [
            ["แต้ม Ability", ">", 0],
        ],
        "use_results": [
            {
                "condition": [
                ],
                "results": [
                    ["[ปลด] นักสู้มืออาชีพ", "=", 1],
                    ["นักสู้มืออาชีพ", "=", 0],
                    ["how_good_can_fight", "+", 15],
                    ["แต้ม Ability", "-", 1],
                ],
            },
        ]
    },
    "[ปลด] นักสู้มืออาชีพ": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "[ปลด] โอกาสได้รับบาดแผลจากการต่อสู้น้อยลง",
        "usable": true,
        "use_results": [
            {
                "condition": [
                ],
                "results": [
                    ["[ปลด] นักสู้มืออาชีพ", "=", 0],
                    ["นักสู้มืออาชีพ", "=", 1],
                    ["how_good_can_fight", "-", 15],
                    ["แต้ม Ability", "+", 1],
                ]
            },
        ]
    },
    "how_good_can_fight": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    //===============================================================================================
    "นักเจรจาต่อรอง": {
        "current_val": 1,
        "type": "item",
        "show": true,
        "item_detail": "ลดราคาขาย และมอบการันตีการโผล่ของ Choice เจรจา",
        "usable": true,
        "condition": [
            ["แต้ม Ability", ">", 0],
        ],
        "use_results": [
            {
                "condition": [
                ],
                "results": [
                    ["[ปลด] นักเจรจาต่อรอง", "=", 1],
                    ["นักเจรจาต่อรอง", "=", 0],
                    ["how_good_can_you_talk", "+", 1],
                    ["แต้ม Ability", "-", 1],
                ],
            },
        ]
    },
    "[ปลด] นักเจรจาต่อรอง": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "[ปลด] ลดราคาขาย และมอบการันตีการโผล่ของ Choice เจรจา",
        "usable": true,
        "use_results": [
            {
                "condition": [
                ],
                "results": [
                    ["[ปลด] นักเจรจาต่อรอง", "=", 0],
                    ["นักเจรจาต่อรอง", "=", 1],
                    ["how_good_can_you_talk", "-", 1],
                    ["แต้ม Ability", "+", 1],
                ]
            },
        ]
    },
    "how_good_can_you_talk": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    //===============================================================================================
    "กลมกลืนกับสภาพแวดล้อม": {
        "current_val": 1,
        "type": "item",
        "show": true,
        "item_detail": "เพิ่มโอกาสความสำเร็จในการหลบซ่อนตัว",
        "usable": true,
        "condition": [
            ["แต้ม Ability", ">", 0],
        ],
        "use_results": [
            {
                "condition": [
                ],
                "results": [
                    ["[ปลด] กลมกลืนกับสภาพแวดล้อม", "=", 1],
                    ["กลมกลืนกับสภาพแวดล้อม", "=", 0],
                    ["how_good_can_you_hide", "+", 40],
                    ["แต้ม Ability", "-", 1],
                ],
            },
        ]
    },
    "[ปลด] กลมกลืนกับสภาพแวดล้อม": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "[ปลด] เพิ่มโอกาสความสำเร็จในการหลบซ่อนตัว",
        "usable": true,
        "use_results": [
            {
                "condition": [
                ],
                "results": [
                    ["[ปลด] กลมกลืนกับสภาพแวดล้อม", "=", 0],
                    ["กลมกลืนกับสภาพแวดล้อม", "=", 1],
                    ["how_good_can_you_hide", "-", 45],
                    ["แต้ม Ability", "+", 1],
                ]
            },
        ]
    },
    "how_good_can_you_hide": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    //===============================================================================================
    "มือไว": {
        "current_val": 1,
        "type": "item",
        "show": true,
        "item_detail": "เพิ่มโอกาสความสำเร็จในการขโมยของ",
        "usable": true,
        "condition": [
            ["แต้ม Ability", ">", 0],
        ],
        "use_results": [
            {
                "condition": [
                ],
                "results": [
                    ["[ปลด] มือไว", "=", 1],
                    ["มือไว", "=", 0],
                    ["how_good_can_you_steal", "+", 65],
                    ["แต้ม Ability", "-", 1],
                ],
            },
        ]
    },
    "[ปลด] มือไว": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "[ปลด] เพิ่มโอกาสความสำเร็จในการขโมยของ",
        "usable": true,
        "use_results": [
            {
                "condition": [
                ],
                "results": [
                    ["[ปลด] มือไว", "=", 0],
                    ["มือไว", "=", 1],
                    ["how_good_can_you_steal", "-", 65],
                    ["แต้ม Ability", "+", 1],
                ]
            },
        ]
    },
    "how_good_can_you_steal": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    //===============================================================================================
    "ตาเหยี่ยว": {
        "current_val": 1,
        "type": "item",
        "show": true,
        "item_detail": "การันตีการสังเกตเห็นรายละเอียดที่ถูกซ่อนอยู่",
        "usable": true,
        "condition": [
            ["แต้ม Ability", ">", 0],
        ],
        "use_results": [
            {
                "condition": [
                ],
                "results": [
                    ["[ปลด] ตาเหยี่ยว", "=", 1],
                    ["ตาเหยี่ยว", "=", 0],
                    ["how_good_can_you_see", "+", 1],
                    ["แต้ม Ability", "-", 1],
                ],
            },
        ]
    },
    "[ปลด] ตาเหยี่ยว": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "[ปลด] การันตีการสังเกตเห็นรายละเอียดที่ถูกซ่อนอยู่",
        "usable": true,
        "use_results": [
            {
                "condition": [
                ],
                "results": [
                    ["[ปลด] ตาเหยี่ยว", "=", 0],
                    ["ตาเหยี่ยว", "=", 1],
                    ["how_good_can_you_see", "-", 1],
                    ["แต้ม Ability", "+", 1],
                ]
            },
        ]
    },
    "how_good_can_you_see": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    //===============================================================================================
    "มือช่าง": {
        "current_val": 1,
        "type": "item",
        "show": true,
        "item_detail": "การันตีการซ่อมหรือปรับแต่งกลไกกับดัก",
        "usable": true,
        "condition": [
            ["แต้ม Ability", ">", 0],
        ],
        "use_results": [
            {
                "condition": [
                ],
                "results": [
                    ["[ปลด] มือช่าง", "=", 1],
                    ["มือช่าง", "=", 0],
                    ["้how_good_can_you_fix", "+", 1],
                    ["แต้ม Ability", "-", 1],
                ],
            },
        ]
    },
    "[ปลด] มือช่าง": {
        "current_val": 0,
        "type": "item",
        "show": true,
        "item_detail": "[ปลด] การันตีการซ่อมหรือปรับแต่งกลไกกับดัก",
        "usable": true,
        "use_results": [
            {
                "condition": [
                ],
                "results": [
                    ["[ปลด] มือช่าง", "=", 0],
                    ["มือช่าง", "=", 1],
                    ["้how_good_can_you_fix", "-", 1],
                    ["แต้ม Ability", "+", 1],
                ]
            },
        ]
    },
    "้how_good_can_you_fix": {
        "current_val": 0,
        "type": "value",
        "show": false,
    },
    //===============================================================================================
}