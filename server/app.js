const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/data', (req, res) => res.json({
                "primaryColor": "#F36533",
                "secondaryColor": "#73645E",
                "tertiaryColor": "#FFFFFF",
                "quaternary": "#000000",
                "primaryFont": "GSK header button font",
                "secondaryFont": "GSK text, card font",
                "page": [
                    {
                        "order": "1",
                        "title": "Home",
                        "languageType": "us-en...us-uk",
                        "active": "true",
                        "components": [
                            {
                                "questions": "answers"
                            },
                            {
                                "id": "card-title",
                                "image": "https://images.unsplash.com/photo-1544991875-5dc1b05f607d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                                "header": "Safe",
                                "body": "lorem fdsfs dfgg f gfg fdg fdg fdgf dgfd gdf"
                            },
                            {
                                "id": "card-title",
                                "image": "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                                "header": "Safe",
                                "body": "lorem fdsfs dfgg f gfg fdg fdg fdgf dgfd gdf"
                            }
                        ]
                    },
                    {
                        "order": "2",
                        "title": "FAQs",
                        "languageType": "us-en...us-uk",
                        "active": "true",
                        "components": [
                            {
                                "questions": "answers"
                            }
                        ]
                    },
                    {
                        "order": "3",
                        "title": "FAQs",
                        "languageType": "us-en...us-uk",
                        "active": "true",
                        "components": [
                            {
                                "questions": "answers"
                            }
                        ]
                    },
                    {
                        "order": "4",
                        "title": "Contact Us",
                        "languageType": "us-en...us-uk",
                        "active": "true",
                        "components": [
                            {
                                "email": "answers",
                                "phone": "(888)-825-5249",
                                "mapImage": "url-image",
                                "address": " 5 Crescent Dr, Philadelphia, PA 19112"
                            }
                        ]
                    },
                    {
                        "order": "5",
                        "title": "Trials",
                        "languageType": "us-en...us-uk",
                        "active": "true",
                        "components": [
                            {
                                "questions": "answers"
                            },
                            {
                                "accept": "Congrates you are accept to the trail",
                                "denied": "Sorry but you do not qualify for this trail"
                            }
                        ]
                    },
                    {
                        "order": "6",
                        "title": "How to participate",
                        "languageType": "us-en...us-uk",
                        "active": "true",
                        "components": [
                            {
                                "questions": "answers"
                            }
                        ]
                    }
                ]
            }
))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
