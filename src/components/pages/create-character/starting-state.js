

let initialCharState = {
    level1Nav: [{
        title: 'Gender',
        icon: 'neuter',
        level2: [],
        options: [{
            id: 1,
            valueSvg: `Male`,
            displayImg: <div className="gender-item">
                <i className="fa fa-mars"></i>
                <p>Male</p>
            </div>
        },
        {
            id: 2,
            valueSvg: `female`,
            displayImg: <div className="gender-item"><i className="fa fa-venus"></i>
                <p>Female</p></div>
        },
        {
            id: 1,
            valueSvg: `neutra`,
            displayImg: <div className="gender-item"><i className="fa fa-neuter"></i>
                <p>Neutral</p></div>
        },]
    },
    {
        title: 'face',
        icon: 'smile',
        level2:
            [
                {
                    title: 'Shape',
                    icon: 'meh',
                    options: [{
                        id: 1,
                        valueSvg: ` <p>1</p>`,
                        displayImg: 'Circle'
                    },
                    {
                        id: 2,
                        valueSvg: ` <p>1asf</p>`,
                        displayImg: '2'
                    },
                    {
                        id: 3,
                        valueSvg: ` <p>1</p>`,
                        displayImg: '3'
                    },
                    {
                        id: 4,
                        valueSvg: ` <p>1</p>`,
                        displayImg: '4'
                    }
                    ]
                },
                {
                    title: 'Hairstyle',
                    icon: 'rainbow',
                    options: [
                        {
                            id: 1,
                            displayImg: 'Short-Spike',
                            valueSvg: <use id="hairstyle-spike" width="454" height="213" x="188.469" y="139.831" transform="scale(.99963 1.00235)" xlinkHref="#_Image1"></use >,
                        },
                        {
                            id: 2,
                            displayImg: 'medium curl',
                            valueSvg: <use
                                id="hairstyle-medium-curl"
                                width="674"
                                height="433"
                                x="162.961"
                                y="110.005"
                                transform="scale(.99852 .99923)"
                                xlinkHref="#_Image2"
                            ></use>,
                        },
                        {
                            id: 3,
                            valueSvg:
                                <use
                                    id="hairstyle-medium-long"
                                    width="663"
                                    height="646"
                                    x="165.715"
                                    y="123.568"
                                    transform="scale(1.00075 1.00026)"
                                    xlinkHref="#_Image3"
                                ></use>,
                            displayImg: 'long hair'
                        },
                    ]
                },
                {
                    title: 'Hair Color',
                    icon: 'tint',
                    options: [{
                        id: 1,
                        valueSvg: ` <p>1</p>`,
                        displayImg: 'Circle'
                    },
                    {
                        id: 2,
                        valueSvg: ` <p>1asf</p>`,
                        displayImg: '2'
                    },
                    {
                        id: 3,
                        valueSvg: ` <p>1</p>`,
                        displayImg: '3'
                    },
                    {
                        id: 4,
                        valueSvg: ` <p>1</p>`,
                        displayImg: '4'
                    }
                    ]
                },
                {
                    title: 'Eyes',
                    icon: 'tint',
                    options: [{
                        id: 1,
                        valueSvg: ` <p>1</p>`,
                        displayImg: 'Circle'
                    },
                    {
                        id: 2,
                        valueSvg: ` <p>1asf</p>`,
                        displayImg: '2'
                    },
                    {
                        id: 3,
                        valueSvg: ` <p>1</p>`,
                        displayImg: '3'
                    },
                    {
                        id: 4,
                        valueSvg: ` <p>1</p>`,
                        displayImg: '4'
                    }
                    ]
                },

                {
                    title: 'Eye Color',
                    icon: 'tint',
                    options: [{
                        id: 1,
                        valueSvg: ` <p>1</p>`,
                        displayImg: 'Circle'
                    },
                    {
                        id: 2,
                        valueSvg: ` <p>1asf</p>`,
                        displayImg: '2'
                    },
                    {
                        id: 3,
                        valueSvg: ` <p>1</p>`,
                        displayImg: '3'
                    },
                    {
                        id: 4,
                        valueSvg: ` <p>1</p>`,
                        displayImg: '4'
                    }
                    ]
                },
                {
                    title: 'Nose',
                    icon: 'tint',
                    options: [{
                        id: 1,
                        valueSvg: ` <p>1</p>`,
                        displayImg: 'Circle'
                    },
                    {
                        id: 2,
                        valueSvg: ` <p>1asf</p>`,
                        displayImg: '2'
                    },
                    {
                        id: 3,
                        valueSvg: ` <p>1</p>`,
                        displayImg: '3'
                    },
                    {
                        id: 4,
                        valueSvg: ` <p>1</p>`,
                        displayImg: '4'
                    }
                    ]
                },
                {
                    title: 'Eyelashes',
                    icon: 'tint',
                    options: [{
                        id: 1,
                        valueSvg: ` <p>1</p>`,
                        displayImg: 'Circle'
                    },
                    {
                        id: 2,
                        valueSvg: ` <p>1asf</p>`,
                        displayImg: '2'
                    },
                    {
                        id: 3,
                        valueSvg: ` <p>1</p>`,
                        displayImg: '3'
                    },
                    {
                        id: 4,
                        valueSvg: ` <p>1</p>`,
                        displayImg: '4'
                    }
                    ]
                },
                {
                    title: 'Glasses',
                    icon: 'tint',
                    options: [{
                        id: 1,
                        valueSvg: ``,
                        displayImg: 'None'
                    },
                    {
                        id: 2,
                        valueSvg:
                            <use
                                id="glasses"
                                width="523"
                                height="265"
                                x="191.771"
                                y="173.645"
                                transform="scale(.99619 .99375)"
                                xlinkHref="#_Image12"
                            ></use>,
                        displayImg: 'Square'
                    }
                    ]
                },
                {
                    title: 'Mustach',
                    icon: 'tint',
                    options: [{
                        id: 1,
                        valueSvg: ``,
                        displayImg: 'None'
                    },
                    {
                        id: 2,
                        valueSvg:
                            <use
                                id="mustach-longchinese"
                                width="335"
                                height="260"
                                x="198.925"
                                y="210.085"
                                transform="scale(1.005 1.00645)"
                                xlinkHref="#_Image4"
                            ></use>,
                        displayImg: 'Chinese long'
                    },
                    {
                        id: 3,
                        valueSvg:
                            <use
                                id="mustach-regular"
                                width="210"
                                height="67"
                                x="213.333"
                                y="211.821"
                                transform="scale(1.008 1.005)"
                                xlinkHref="#_Image5"
                            ></use>,
                        displayImg: 'Regular'
                    }
                    ]
                },
            ],
        options: [],
    },
    {
        title: 'body style',
        icon: 'female',
        level2: [],
        options: [{
            id: 1,
            valueSvg: ` <p>1</p>`,
            displayImg: '1'
        },
        {
            id: 2,
            valueSvg: ` <p>1</p>`,
            displayImg: '2'
        },
        {
            id: 1,
            valueSvg: ` <p>1</p>`,
            displayImg: '3'
        },
        {
            id: 1,
            valueSvg: ` <p>1</p>`,
            displayImg: '4'
        },]
    },
    {
        title: 'clothing',
        icon: 'tshirt',
        level2: [{
            title: 'Jackets',
            icon: 'user-secret',
            options: [{
                id: 1,
                valueSvg: ` <p>1</p>`,
                displayImg: '1'
            },
            {
                id: 2,
                valueSvg: ` <p>1</p>`,
                displayImg: '2'
            },
            {
                id: 3,
                valueSvg: ` <p>1</p>`,
                displayImg: '3'
            },
            {
                id: 4,
                valueSvg: ` <p>1</p>`,
                displayImg: '4'
            }
            ]
        },
        {
            title: 'Suits',
            icon: 'user-tie',
            options: [{
                id: 1,
                valueSvg: ` <p>1</p>`,
                displayImg: '1'
            },
            {
                id: 2,
                valueSvg: ` <p>1</p>`,
                displayImg: '2'
            },
            {
                id: 3,
                valueSvg: ` <p>1</p>`,
                displayImg: '3'
            },
            {
                id: 4,
                valueSvg: ` <p>1</p>`,
                displayImg: '4'
            }
            ]
        },
        {
            title: 'Shirts',
            icon: 'user-tie',
            options: [{
                id: 1,
                valueSvg: ` <p>1</p>`,
                displayImg: '1'
            },
            {
                id: 2,
                valueSvg: ` <p>1</p>`,
                displayImg: '2'
            },
            {
                id: 3,
                valueSvg: ` <p>1</p>`,
                displayImg: '3'
            },
            {
                id: 4,
                valueSvg: ` <p>1</p>`,
                displayImg: '4'
            }
            ]
        },
        {
            title: 'T Shirts',
            icon: 'tshirt',
            options: [{
                id: 1,
                valueSvg: ` <p>1</p>`,
                displayImg: '1'
            },
            {
                id: 2,
                valueSvg: ` <p>1</p>`,
                displayImg: '2'
            },
            {
                id: 3,
                valueSvg: ` <p>1</p>`,
                displayImg: '3'
            },
            {
                id: 4,
                valueSvg: ` <p>1</p>`,
                displayImg: '4'
            }
            ]
        },
        {
            title: 'Tanks',
            icon: 'tshirt',
            options: [{
                id: 1,
                valueSvg: ` <p>1</p>`,
                displayImg: '1'
            },
            {
                id: 2,
                valueSvg: ` <p>1</p>`,
                displayImg: '2'
            },
            {
                id: 3,
                valueSvg: ` <p>1</p>`,
                displayImg: '3'
            },
            {
                id: 4,
                valueSvg: ` <p>1</p>`,
                displayImg: '4'
            }
            ]
        },
        {
            title: 'Shorts',
            icon: 'tshirt',
            options: [{
                id: 1,
                valueSvg: ` <p>1</p>`,
                displayImg: '1'
            },
            {
                id: 2,
                valueSvg: ` <p>1</p>`,
                displayImg: '2'
            },
            {
                id: 3,
                valueSvg: ` <p>1</p>`,
                displayImg: '3'
            },
            {
                id: 4,
                valueSvg: ` <p>1</p>`,
                displayImg: '4'
            }
            ]
        },
        {
            title: 'Pants',
            icon: 'tshirt',
            options: [{
                id: 1,
                valueSvg: ` <p>1</p>`,
                displayImg: '1'
            },
            {
                id: 2,
                valueSvg: ` <p>1</p>`,
                displayImg: '2'
            },
            {
                id: 3,
                valueSvg: ` <p>1</p>`,
                displayImg: '3'
            },
            {
                id: 4,
                valueSvg: ` <p>1</p>`,
                displayImg: '4'
            }
            ]
        },
        {
            title: 'Skirts',
            icon: 'tshirt',
            options: [{
                id: 1,
                valueSvg: ` <p>1</p>`,
                displayImg: '1'
            },
            {
                id: 2,
                valueSvg: ` <p>1</p>`,
                displayImg: '2'
            },
            {
                id: 3,
                valueSvg: ` <p>1</p>`,
                displayImg: '3'
            },
            {
                id: 4,
                valueSvg: ` <p>1</p>`,
                displayImg: '4'
            }
            ]
        },
        {
            title: 'Frocks',
            icon: 'tshirt',
            options: [{
                id: 1,
                valueSvg: ` <p>1</p>`,
                displayImg: '1'
            },
            {
                id: 2,
                valueSvg: ` <p>1</p>`,
                displayImg: '2'
            },
            {
                id: 3,
                valueSvg: ` <p>1</p>`,
                displayImg: '3'
            },
            {
                id: 4,
                valueSvg: ` <p>1</p>`,
                displayImg: '4'
            }
            ]
        },
        {
            title: 'Minis',
            icon: 'tshirt',
            options: [{
                id: 1,
                valueSvg: ` <p>1</p>`,
                displayImg: '1'
            },
            {
                id: 2,
                valueSvg: ` <p>1</p>`,
                displayImg: '2'
            },
            {
                id: 3,
                valueSvg: ` <p>1</p>`,
                displayImg: '3'
            },
            {
                id: 4,
                valueSvg: ` <p>1</p>`,
                displayImg: '4'
            }
            ]
        }],
        options: []
    }
    ],

    level2Nav: [],
    level3Nav: [],
    showLevel2Menu: false,
    currentCharacter: {
        hairstyle: '',
        glasses: '',
        mustach: '',
    },
    currentLevel2: {}
}

export default initialCharState;