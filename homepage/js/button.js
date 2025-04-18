document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('param');
  const background_colors = ["#0000FF","#e16112", "#2e9f259d", "#f2d65cde", "1b1b1aa0"]
  const period_param = ["P1", "P2", "P3", "P4"]
  const language_param = ["L1", "L2", "L3", "L4", "L5"]

  const purpose_param = Array.from({ length: 16 }, (_, i) => `PP${i + 1}`)
  const season_param = [
    "S1", "S2"
  ];

  const style_param = Array.from({ length: 7 }, (_, i) => `Style${i + 1}`)

  const event_param = Array.from({ length: 4 }, (_, i) => `E${i + 1}`)

  console.log("button.js loaded");

  if(myParam == null){
    alert("最初からやり直してください");
    window.location.href = "homepage.html";
  }
  const obj = {
    "H1P1": "期間で決める/1週間",
    "H1P2": "期間で決める/2週間",
    "H1P3": "期間で決める/1－2か月",
    "H1P4": "期間で決める/3か月",
    "H2L1P2": "語学レベルで選ぶ/A1/2週間",
    "H2L1P3": "語学レベルで選ぶ/A1/1－2か月",
    "H2L2P2": "語学レベルで選ぶ/A2/2週間",
    "H2L2P3": "語学レベルで選ぶ/A2/1－2か月",
    "H2L3P1": "語学レベルで選ぶ/B1/1週間",
    "H2L3P2": "語学レベルで選ぶ/B1/2週間",
    "H2L3P3": "語学レベルで選ぶ/B1/1－2か月",
    "H2L3P4": "語学レベルで選ぶ/B1/3か月～",
    "H2L4P1": "語学レベルで選ぶ/B2/1週間",
    "H2L4P2": "語学レベルで選ぶ/B2/2週間",
    "H2L4P3": "語学レベルで選ぶ/B2/1－2か月",
    "H2L4P4": "語学レベルで選ぶ/B2/3か月～",
    "H2L5P1": "語学レベルで選ぶ/C1/1週間",
    "H2L5P3": "語学レベルで選ぶ/C1/1－2か月",
    "H3S1P2": "次の長期休みにすぐ行きたい/春休み/2週間",
    "H3S1P3": "次の長期休みにすぐ行きたい/春休み/1－2か月",
    "H3S2P2": "次の長期休みにすぐ行きたい/夏休み/2週間",
    "H3S2P3": "次の長期休みにすぐ行きたい/夏休み/1－2か月",
    "H3S2P4": "次の長期休みにすぐ行きたい/夏休み/3か月～",
    "H4PP1P1": "留学目的で選ぶ/世界トップレベルの大学に行きたい/1週間",
    "H4PP1P2": "留学目的で選ぶ/世界トップレベルの大学に行きたい/2週間",
    "H4PP1P3": "留学目的で選ぶ/世界トップレベルの大学に行きたい/1－2か月",
    "H4PP1P4": "留学目的で選ぶ/世界トップレベルの大学に行きたい/3か月～",
    "H4PP2P1": "留学目的で選ぶ/海外で研究したい/1週間",
    "H4PP2P3": "留学目的で選ぶ/海外で研究したい/1－2か月",
    "H4PP2P4": "留学目的で選ぶ/海外で研究したい/3か月～",
    "H4PP3P1": "留学目的で選ぶ/海外でキャンパスライフ/1週間",
    "H4PP3P2": "留学目的で選ぶ/海外でキャンパスライフ/2週間",
    "H4PP3P3": "留学目的で選ぶ/海外でキャンパスライフ/1－2か月",
    "H4PP3P4": "留学目的で選ぶ/海外でキャンパスライフ/3か月～",
    "H4PP4P1": "留学目的で選ぶ/専門性を深めたい/1週間",
    "H4PP4P2": "留学目的で選ぶ/専門性を深めたい/2週間",
    "H4PP4P3": "留学目的で選ぶ/専門性を深めたい/1－2か月",
    "H4PP4P4": "留学目的で選ぶ/専門性を深めたい/3か月～",
    "H4PP5P2": "留学目的で選ぶ/海外でプロジェクトをしてみたい/2週間",
    "H4PP6P3": "留学目的で選ぶ/将来海外で働きたい/1－2か月",
    "H4PP6P4": "留学目的で選ぶ/将来海外で働きたい/3か月～",
    "H4PP8P2": "留学目的で選ぶ/海外の友達が欲しい/2週間",
    "H4PP11P2": "留学目的で選ぶ/語学力（英語）をあげたい/2週間",
    "H4PP11P3": "留学目的で選ぶ/語学力（英語）をあげたい/1－2か月",
    "H4PP12P2": "留学目的で選ぶ/語学力（英語以外）をあげたい/2週間",
    "H4PP12P3": "留学目的で選ぶ/語学力（英語以外）をあげたい/1－2か月",
    "H4PP13P2": "留学目的で選ぶ/異文化交流/2週間",
    "H4PP14P2": "留学目的で選ぶ/自分を変えたい/2週間",
    "H4PP16P4": "留学目的で選ぶ/学位を取得したい/3か月～",
    "H5Style1P2": "留学スタイルで選ぶ/授業中心/2週間",
    "H5Style1P3": "留学スタイルで選ぶ/授業中心/1－2か月",
    "H5Style1P4": "留学スタイルで選ぶ/授業中心/3か月～",
    "H5Style2P3": "留学スタイルで選ぶ/研究中心/1－2か月",
    "H5Style2P4": "留学スタイルで選ぶ/研究中心/3か月～",
    "H5Style3P2": "留学スタイルで選ぶ/インターンシップ/2週間",
    "H5Style3P3": "留学スタイルで選ぶ/インターンシップ/1－2か月",
    "H5Style3P4": "留学スタイルで選ぶ/インターンシップ/3か月～",
    "H5Style4P2": "留学スタイルで選ぶ/語学/2週間",
    "H5Style4P3": "留学スタイルで選ぶ/語学/1－2か月",
    "H5Style5P1": "留学スタイルで選ぶ/ワークショップ/1週間",
    "H5Style5P2": "留学スタイルで選ぶ/ワークショップ/2週間",
    "H5Style6P2": "留学スタイルで選ぶ/スタディツアー/2週間",
    "H5Style7P1": "留学スタイルで選ぶ/国際交流・異文化体験/1週間",
    "H5Style7P2": "留学スタイルで選ぶ/国際交流・異文化体験/2週間",
    "H5Style7P3": "留学スタイルで選ぶ/国際交流・異文化体験/1－2か月",
    "H6E1": "学内でできること/留学経験者との留学相談",
    "H6E2": "学内でできること/留学生との交流",
    "H6E3": "学内でできること/留学と就活",
    "H6E4": "学内でできること/語学力強化"
}

  window.get_menu = function () {
    let option;
    console.log(myParam)
    if (obj[myParam]) {
      option = Object.entries(obj)
      .find(([key]) => key.includes(myParam))?.[1]
      .split("/")
    } else {
      option = Object.entries(obj)
      .find(([key]) => key.includes(myParam))?.[1]
      .split("/")
      .slice(0, -2)
    }
    console.log(option)
    return option
  };

  window.get_period_event_menu = function () {
    let option;
    console.log(myParam)
    if (obj[myParam]) {
      option = Object.entries(obj)
      .find(([key]) => key.includes(myParam))?.[1]
      .split("/")
    } else {
      option = Object.entries(obj)
      .find(([key]) => key.includes(myParam))?.[1]
      .split("/")
      .slice(0, -1)
    }
    console.log(option)
    return option
  };

  window.get_period_event_buttons = function (option_name) {
    var createButton = document.getElementById("create-button");

    var rowDiv = document.createElement("div");
    rowDiv.className = "row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center pl-md-4";

    let option_param = ""
    if (option_name === "period") {
      option_param = period_param
    } else if (option_name === "event") {
      option_param = event_param
    }

    for (let i = 0; i < option_param.length; i++) {
      new_param = myParam + option_param[i];
      if(obj[new_param]){
        var div = document.createElement("div");
        div.className = "col-4";

        var card = document.createElement("div");
        card.className = "card mb-4 rounded-3 shadow-sm h-100";
        card.style.maxHeight = "auto";

        var cardBody = document.createElement("div");
        cardBody.className = "card-body text-center d-flex flex-column justify-content-center";

        var link = document.createElement("a");
        link.href = "school.html?param=" + new_param;
        link.className = "w-100 text-center d-flex flex-column justify-content-center btn btn-lg btn-primary h-100";
        link.type = "button";
        if (obj[new_param].split("/")[2]){
          link.innerText = obj[new_param].split("/")[2]
        } else {
          link.innerText = obj[new_param].split("/")[1]
        }
        link.style.backgroundColor = background_colors[i % background_colors.length];
        link.style.borderColor = background_colors[i % background_colors.length];
        link.style.color = "#ffffff";

        cardBody.appendChild(link);

        card.appendChild(cardBody);

        div.appendChild(card);

        rowDiv.appendChild(div);
      }
      createButton.appendChild(rowDiv);
    }
  }

  window.get_option_buttons = function(option_name) {
    var createButton = document.getElementById("create-button");

    var rowDiv = document.createElement("div");
    rowDiv.className = "row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center pl-md-4";

    let option_param = ""
    if (option_name === "language") {
      option_param = language_param
    } else if (option_name === "purpose") {
      option_param = purpose_param
    } else if (option_name === "season") {
      option_param = season_param
    } else if (option_name === "style") {
      option_param = style_param
    }
    for (let i = 0; i < option_param.length; i++) {
      new_param = myParam + option_param[i];
      console.log(new_param)
      if (Object.keys(obj).some(key => key.includes(new_param))) {
        var div = document.createElement("div");
        div.className = "col-4";

        var card = document.createElement("div");
        card.className = "card mb-4 rounded-3 shadow-sm h-100";
        card.style.maxHeight = "auto";

        var cardBody = document.createElement("div");
        cardBody.className = "card-body text-center d-flex flex-column justify-content-center";

        var link = document.createElement("a");
        link.href = "period.html?param=" + new_param;
        link.className = "w-100 text-center d-flex flex-column justify-content-center btn btn-lg btn-primary h-100";
        link.type = "button";
        const option = Object.entries(obj).find(([key]) => key.includes(new_param))?.[1];
        link.innerText = option.split("/")[1]
        link.style.backgroundColor = background_colors[i % background_colors.length];
        link.style.borderColor = background_colors[i % background_colors.length];
        link.style.color = "#ffffff";

        cardBody.appendChild(link);

        card.appendChild(cardBody);

        div.appendChild(card);

        rowDiv.appendChild(div);
      }
      createButton.appendChild(rowDiv);
    }
  }

});