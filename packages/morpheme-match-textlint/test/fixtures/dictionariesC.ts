// MIT © 2021 Taiyo
"use strict";
export const dictionariesDebug = [
    // ルール　助詞の連続（タイプミス）
    {
        message: `「$1$2$3」には助詞の連続があります（係助詞の連続） err 1`,
        //名詞はは連続しない。
        expected: '$1$2',
        tokens: [
            {
                "_capture": "$1"
            },{
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$2"
            },{
                "pos": "助詞",
                "pos_detail_1": "係助詞",
                "_capture": "$3"
            }
        ]
    }
]