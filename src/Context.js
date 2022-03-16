import React, { createContext, useState } from 'react'

export const datastore = createContext();

export const Context = (props) => {

  const [Home_data] = useState([{
    img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/Maruti-Suzuki-Swift-100320211204.jpg&w=872&h=578&q=75&c=1",
    subhead: "Swift Faulty Fuel Pump",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "Hatchback",
    created: "22 Jan 2022",
    id: 1,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis? Minus dolorum laborum tenetur perspiciatis illum, omnis amet facilis velit corrupti mollitia reprehenderit, voluptatum saepe doloremque iusto nostrum inventore a! Cumque, repudiandae facere ratione ea nostrum perspiciatis ipsum est ad! Distinctio adipisci, quos maiores, quod quo repellat possimus illo eius at officia quaerat dolorum fugiat vero est cupiditate, exercitationem dolor perspiciatis minima. Earum quas reiciendis tenetur obcaecati minus fuga impedit?"


  }, {
    img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=75",
    subhead: "After Ford's exit Fortuner becomes the monopoly in the high end SUV category",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "SUV",
    created: "5 Mar 2022",
    id: 2,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis? Minus dolorum laborum tenetur perspiciatis illum, omnis amet facilis velit corrupti mollitia reprehenderit, voluptatum saepe doloremque iusto nostrum inventore a! Cumque, repudiandae facere ratione ea nostrum perspiciatis ipsum est ad! Distinctio adipisci, quos maiores, quod quo repellat possimus illo eius at officia quaerat dolorum fugiat vero est cupiditate, exercitationem dolor perspiciatis minima. Earum quas reiciendis tenetur obcaecati minus fuga impedit?"


  }, {
    img: "https://gaadiwaadi.com/wp-content/uploads/2022/03/Volkswagen-Virtus-Vs-Skoda-Slavia.jpg",
    subhead: "Two brothers will have a face-off: Virtus and Slavia",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "Sedans",
    created: "2 Feb 2022",
    id: 3,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis? Minus dolorum laborum tenetur perspiciatis illum, omnis amet facilis velit corrupti mollitia reprehenderit, voluptatum saepe doloremque iusto nostrum inventore a! Cumque, repudiandae facere ratione ea nostrum perspiciatis ipsum est ad! Distinctio adipisci, quos maiores, quod quo repellat possimus illo eius at officia quaerat dolorum fugiat vero est cupiditate, exercitationem dolor perspiciatis minima. Earum quas reiciendis tenetur obcaecati minus fuga impedit?"


  }, {
    img: "https://www.motorbeam.com/wp-content/uploads/2022-Ford-Endeavour-Front.jpg",
    subhead: "New age Endeavour gets debuted globally. Look what we miss",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "SUV",
    created: "9 Mar 2022",
    id: 4,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis? Minus dolorum laborum tenetur perspiciatis illum, omnis amet facilis velit corrupti mollitia reprehenderit, voluptatum saepe doloremque iusto nostrum inventore a! Cumque, repudiandae facere ratione ea nostrum perspiciatis ipsum est ad! Distinctio adipisci, quos maiores, quod quo repellat possimus illo eius at officia quaerat dolorum fugiat vero est cupiditate, exercitationem dolor perspiciatis minima. Earum quas reiciendis tenetur obcaecati minus fuga impedit?"


  }, {
    img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=75",
    subhead: "Polo might get Discontinued in the near future",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "Hatchback",
    created: "2 Feb 2022",
    id: 5,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis? Minus dolorum laborum tenetur perspiciatis illum, omnis amet facilis velit corrupti mollitia reprehenderit, voluptatum saepe doloremque iusto nostrum inventore a! Cumque, repudiandae facere ratione ea nostrum perspiciatis ipsum est ad! Distinctio adipisci, quos maiores, quod quo repellat possimus illo eius at officia quaerat dolorum fugiat vero est cupiditate, exercitationem dolor perspiciatis minima. Earum quas reiciendis tenetur obcaecati minus fuga impedit?"

  }, {
    img: "https://imgk.timesnownews.com/story/new_i20_vs_baleno.png?tr=w-1200,h-900",
    subhead: "Rivalry continues between i20 and Baleno",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "Hatchback",
    created: "10 Mar 2022",
    id: 6,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis? Minus dolorum laborum tenetur perspiciatis illum, omnis amet facilis velit corrupti mollitia reprehenderit, voluptatum saepe doloremque iusto nostrum inventore a! Cumque, repudiandae facere ratione ea nostrum perspiciatis ipsum est ad! Distinctio adipisci, quos maiores, quod quo repellat possimus illo eius at officia quaerat dolorum fugiat vero est cupiditate, exercitationem dolor perspiciatis minima. Earum quas reiciendis tenetur obcaecati minus fuga impedit?"

  }])

  const [HomeLandscape] = useState([{

    img: "https://cdn.motor1.com/images/mgl/KbJyll/s3/2022-vw-virtus.jpg",
    subhead: "Virtus getting higher attention through out the segment",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "Sedans",
    created: "17 Jan 2022",
    id: 7,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis? Minus dolorum laborum tenetur perspiciatis illum, omnis amet facilis velit corrupti mollitia reprehenderit, voluptatum saepe doloremque iusto nostrum inventore a! Cumque, repudiandae facere ratione ea nostrum perspiciatis ipsum est ad! Distinctio adipisci, quos maiores, quod quo repellat possimus illo eius at officia quaerat dolorum fugiat vero est cupiditate, exercitationem dolor perspiciatis minima. Earum quas reiciendis tenetur obcaecati minus fuga impedit?"



  }, {
    img: "https://www.financialexpress.com/wp-content/uploads/2022/02/Tata-Motors-Kaziranga-Range.jpg",
    subhead: "Tata launches Kaziranga Edition for it's SUV range",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "SUV",
    created: "15 Jan 2022",
    id: 8,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis? Minus dolorum laborum tenetur perspiciatis illum, omnis amet facilis velit corrupti mollitia reprehenderit, voluptatum saepe doloremque iusto nostrum inventore a! Cumque, repudiandae facere ratione ea nostrum perspiciatis ipsum est ad! Distinctio adipisci, quos maiores, quod quo repellat possimus illo eius at officia quaerat dolorum fugiat vero est cupiditate, exercitationem dolor perspiciatis minima. Earum quas reiciendis tenetur obcaecati minus fuga impedit?"



  }, {
    img: "https://imgd.aeplcdn.com/0x0/n/cw/ec/41197/verna-exterior-right-front-three-quarter-2.jpeg",
    subhead: "Verna is the most popular car in the youth.",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "Sedans",
    created: "15 Mar 2022",
    id: 9,
    detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."


  }, {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/800px-Ford_logo_flat.svg.png",
    subhead: "Ford getting popular in the used car market",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "Hatchback",
    created: "7 Mar 2022",
    id: 10,
    detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."


  }])
  const [toppost] = useState([{
    img: "https://cdni.autocarindia.com/ExtraImages/20210406010759_2020_Honda_City_LT_1.jpg",
    subhead: "City sets to be the highest selling sedan within the competition.",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "Sedans",
    created: "22 Jan 2022",
    id: 11,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis? Minus dolorum laborum tenetur perspiciatis illum, omnis amet facilis velit corrupti mollitia reprehenderit, voluptatum saepe doloremque iusto nostrum inventore a! Cumque, repudiandae facere ratione ea nostrum perspiciatis ipsum est ad! Distinctio adipisci, quos maiores, quod quo repellat possimus illo eius at officia quaerat dolorum fugiat vero est cupiditate, exercitationem dolor perspiciatis minima. Earum quas reiciendis tenetur obcaecati minus fuga impedit?"



  }, {
    img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=75",
    subhead: "Polo might get Discontinued in the near future",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "HatchBack",
    created: "5 Mar 2022",
    id: 12,
    detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."


  }, {
    img: "https://www.rushlane.com/wp-content/uploads/2021/10/mahindra-xuv700-waiting-period-1-year-1200x675.jpg",
    subhead: "XUV700 gets a waiting period of over three years",
    content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
    type: "SUV",
    created: "2 Feb 2022",
    id: 13,
    detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."


  }])

  const [Hatch] = useState([
    {
      img: "https://imgk.timesnownews.com/story/new_i20_vs_baleno.png?tr=w-1200,h-900",
      subhead: "Rivalry continues between i20 and Baleno",
      content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
      type: "Hatchback",
      created: "17 Jan 2022",
      id: 14,
      detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."

    }, {
      img: "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228134641/cars.jpg",
      subhead: "Hatchbacks gainning more interest in the Indian Conumers",
      content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
      type: "Hatchback",
      created: "17 Jan 2022",
      id: 15,
      detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis? Minus dolorum laborum tenetur perspiciatis illum, omnis amet facilis velit corrupti mollitia reprehenderit, voluptatum saepe doloremque iusto nostrum inventore a! Cumque, repudiandae facere ratione ea nostrum perspiciatis ipsum est ad! Distinctio adipisci, quos maiores, quod quo repellat possimus illo eius at officia quaerat dolorum fugiat vero est cupiditate, exercitationem dolor perspiciatis minima. Earum quas reiciendis tenetur obcaecati minus fuga impedit?"



    }, {
      img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/Maruti-Suzuki-Swift-100320211204.jpg&w=872&h=578&q=75&c=1",
      subhead: "Swift getting recalled for faulty fuel pumps.",
      content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
      type: "Hatchback",
      created: "17 Jan 2022",
      id: 16,
      detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis? Minus dolorum laborum tenetur perspiciatis illum, omnis amet facilis velit corrupti mollitia reprehenderit, voluptatum saepe doloremque iusto nostrum inventore a! Cumque, repudiandae facere ratione ea nostrum perspiciatis ipsum est ad! Distinctio adipisci, quos maiores, quod quo repellat possimus illo eius at officia quaerat dolorum fugiat vero est cupiditate, exercitationem dolor perspiciatis minima. Earum quas reiciendis tenetur obcaecati minus fuga impedit?"


    }, {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/800px-Ford_logo_flat.svg.png",
      subhead: "Ford getting popular in the used car market",
      content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
      type: "Hatchback",
      created: "17 Jan 2022",
      id: 17,
      detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."


    }, {
      img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=75",
      subhead: "Polo might get Discontinued in the near future",
      content: "Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque.",
      type: "Hatchback",
      created: "17 Jan 2022",
      id: 18,
      detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus adipisci delectus modi rerum eligendi consequatur voluptatibus, fugiat nihil reprehenderit nobis cumque non nam iusto perspiciatis architecto at sint saepe placeat. Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis? Minus dolorum laborum tenetur perspiciatis illum, omnis amet facilis velit corrupti mollitia reprehenderit, voluptatum saepe doloremque iusto nostrum inventore a! Cumque, repudiandae facere ratione ea nostrum perspiciatis ipsum est ad! Distinctio adipisci, quos maiores, quod quo repellat possimus illo eius at officia quaerat dolorum fugiat vero est cupiditate, exercitationem dolor perspiciatis minima. Earum quas reiciendis tenetur obcaecati minus fuga impedit?"
    }



  ])
  const [Sedans] = useState([
    {
      img: "https://cdn.motor1.com/images/mgl/KbJyll/s3/2022-vw-virtus.jpg",
      subhead: "Virtus getting higher attention through out the segment",
      content: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute.",
      type: "Sedans",
      created: "15 Jan 2022",
      id: 19,
      detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."


    }
    , {
      img: "https://cdni.autocarindia.com/ExtraImages/20210406010759_2020_Honda_City_LT_1.jpg",
      subhead: "City sets to be the highest selling sedan within the competition",
      content: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute.",
      type: "Sedans",
      created: "15 Jan 2022",
      id: 20,
      detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."



    }, {
      img: "https://gaadiwaadi.com/wp-content/uploads/2022/03/Volkswagen-Virtus-Vs-Skoda-Slavia.jpg",
      subhead: "Two brothers will have a face-off: Virtus and Slavia",
      content: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute.",
      type: "Sedans",
      created: "15 Jan 2022",
      id: 21,
      detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."

    }, {
      img: "https://imgd.aeplcdn.com/0x0/n/cw/ec/41197/verna-exterior-right-front-three-quarter-2.jpeg",
      subhead: "Verna is the most popular car in the youth.",
      content: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute.",
      type: "Sedans",
      created: "15 Jan 2022",
      id: 22,
      detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."

    }
  ])

  const [SUV] = useState([
    {
      img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=75",
      subhead: "After Ford's exit Fortuner becomes the monopoly in the high end SUV category",
      content: "Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis?",
      type: "SUV",
      created: "15 Jan 2022",
      id: 23,
      detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."


    }
    , {
      img: "https://www.rushlane.com/wp-content/uploads/2021/10/mahindra-xuv700-waiting-period-1-year-1200x675.jpg",
      subhead: "XUV700 gets a waiting period of over three years",
      content: "Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis?",
      type: "SUV",
      created: "15 Jan 2022",
      id: 24,
      detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."



    }, {
      img: "https://www.financialexpress.com/wp-content/uploads/2022/02/Tata-Motors-Kaziranga-Range.jpg",
      subhead: "Tata launches Kaziranga Edition for it's SUV range",
      content: "Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis?",
      type: "SUV",
      created: "15 Jan 2022",
      id: 25,
      detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."

    }, {
      img: "https://www.motorbeam.com/wp-content/uploads/2022-Ford-Endeavour-Front.jpg",
      subhead: "New age Endeavour gets debuted globally. Look what we miss",
      content: "Pariatur fugiat accusantium, a quidem odio vitae sit cumque. Voluptate ipsum modi, soluta ipsa eveniet, distinctio illo id incidunt possimus magni aut repellendus, fuga aliquid molestias ex voluptas temporibus! Libero. Ducimus culpa illo, blanditiis sed nesciunt, exercitationem fuga voluptatem quia cum cupiditate minima adipisci! A animi ipsa maiores ea. Optio incidunt aliquam ea at ipsum itaque excepturi quis cum facilis?",
      type: "SUV",
      created: "15 Jan 2022",
      id: 26,
      detail: "EtMiUllamco pariatur voluptate adipisicing culpa non voluptate non esse duis nulla. Cupidatat deserunt incididunt anim commodo laboris aliqua excepteur aute. Pariatur pariatur officia officia consequat dolore et magna. Est officia culpa irure sunt. Anim nostrud anim Lorem labore consectetur non id reprehenderit laboris aliquip voluptate. Anim sit quis tempor dolor aliqua irure id cillum dolore consequat.nim dolore ex excepteur elit mollit culpa voluptate veniam incididunt. Magna consequat tempor eiusmod excepteur do nostrud dolore magna tempor sunt cupidatat aliqua ut minim. Consequat id voluptate tempor consequat proident culpa dolor in sit esse fugiat Lorem exercitation aliqua. Irure pariatur deserunt adipisicing non magna consectetur id fugiat ipsum. Amet voluptate laboris ipsum irure amet occaecat labore eu esse laborum laboris ipsum. Laborum veniam commodo voluptate amet quis non sint incididunt aute do eiusmod irure. Aute in et do elit excepteur sint amet incididunt duis minim non. magna ut dolore enim non excepteur exercitation labore et do anim sunt laborum. Excepteur esse labore duis aliquip Lorem et dolor aliquip. Aliqua ullamco fugiat ad magna aliquip.Commodo anim sit est magna reprehenderit dolor ex ullamco culpa. Quis id pariatur cillum exercitation ipsum nisi veniam amet minim labore culpa deserunt ipsum. Do officia commodo voluptate est anim mollit. Culpa consectetur officia Lorem Lorem aliqua duis ea anim tempor in adipisicing."


    }])


  return (
    <datastore.Provider value={[Home_data, HomeLandscape, toppost, Hatch, Sedans, SUV]}>
      {props.children}
    </datastore.Provider>
  )
}