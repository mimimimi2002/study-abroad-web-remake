const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('param');

if(myParam == null){
  alert("最初からやり直してください");
  window.location.href = "homepage.html";
}
const obj = {
  "H1P1": [
      {
          "name": "ASPIREリーグ",
          "url": "https://www.titech.ac.jp/international-cooperation/global/featured/aspire",
          "outline": "ASPIREリーグは、香港科技大学、韓国科学技術院、南洋理工大学、清華大学、本学のアジア理工系トップ5大学で構成されたコンソーシアム。毎年6 ～ 7月に議長校で開催されるフォーラムに合わせ、学生ワークショップを開催。特定のテーマに関連した講義や研究施設見学、グループワーク等の活動に参加し、最終日にグループ発表を行う。",
          "period": "7月上旬～中旬頃",
          "schedule": "4-5月",
          "cost": "20-30万",
          "application_grade": "大学院課程学生",
          "contact": "nan",
          "ID": "photo6"
      },
      {
          "name": "Science Tokyo-AYSEAS",
          "url": "https://www.titech.ac.jp/students/abroad/programs/ayseas",
          "outline": "※医歯学系学生応募可能 東南アジアに赴き、現地・近隣国の大学生と共に企業・政府機関・大学などを訪問する。参加学生は、科学者・技術者の卵として日本も含めたアジアの開発・発展における科学技術の役割というテーマの下、現地調査で得た知見に基づきディスカッションを行い、現地訪問最終日に各ディスカッショングループとしての結論を発表する。",
          "period": "9月の10日程度。事前学習あり",
          "schedule": "5月中旬頃",
          "cost": "旅費（航空券・ホテルなどを含め20~30万円程度）は原則自費。ただし、奨学金給付の可能性あり。",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo4"
      },
      {
          "name": "JSPS リンダウ・ノーベル賞受賞者会議",
          "url": "https://www.titech.ac.jp/students/abroad/programs/lindau-nobel",
          "outline": "リンダウ･ノーベル賞受賞者会議は、世界各国の若手研究者の育成を目的として1951年に開設され、毎年リンダウ（Lindau:ドイツ南部のボーデン湖に面する保養地）において1週間程度の日程で開催されている。毎年30名程度のノーベル賞受賞者が招かれ、各国から集まった若手研究者に対して講演を行うと共に、参加者とのディスカッションに応じるものである。",
          "period": "毎年6月から８月のうち1週間",
          "schedule": "7月中旬～8月上旬",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "博士課程学生又はポスドク研究者",
          "contact": "nan",
          "ID": "photo7"
      },
      {
          "name": "インペリアル・カレッジ・ロンドンとの博士後期課程学生交流プログラム（GFP/インペリアル)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/gfp-imperial",
          "outline": "インペリアル・カレッジ・ロンドンの博士後期課程学生と寝食を共にしながら、専門分野の垣根を越えて世界規模の課題、持続可能な開発目標SDGsについて考える約1週間の合宿型国際交流プログラム。ロンドン又は東京において毎年交代で開催される。2025年は9月に東京で開催。本プログラム終了後、希望者はインペリアル・カレッジ・ロンドンにて1ヶ月から3ヶ月間の研究室滞在を行うことができる。",
          "period": "未定",
          "schedule": "未定",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "博士課程学生",
          "contact": "nan",
          "ID": "photo8"
      }
  ],
  "H1P2": [
      {
          "name": "アントレプレナーシップグローバル海外研修プログラム",
          "url": "http://www.ghrd.titech.ac.jp/course/program/overseas/study_abroad_program/",
          "outline": "世界トップレベルの大学での授業の聴講、学生交流、ラボ見学や、国際機関や現地企業の訪問を通じて、長期留学や海外でのキャリア形成に備える体験留学。",
          "period": "8～9月 2～3月",
          "schedule": "夏派遣：５月頃 春派遣：10月頃",
          "cost": "18～40万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo1"
      },
      {
          "name": "Science Tokyo-AYSEAS",
          "url": "https://www.titech.ac.jp/students/abroad/programs/ayseas",
          "outline": "※医歯学系学生応募可能 東南アジアに赴き、現地・近隣国の大学生と共に企業・政府機関・大学などを訪問する。参加学生は、科学者・技術者の卵として日本も含めたアジアの開発・発展における科学技術の役割というテーマの下、現地調査で得た知見に基づきディスカッションを行い、現地訪問最終日に各ディスカッショングループとしての結論を発表する。",
          "period": "9月の10日程度。事前学習あり",
          "schedule": "5月中旬頃",
          "cost": "旅費（航空券・ホテルなどを含め20~30万円程度）は原則自費。ただし、奨学金給付の可能性あり。",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo4"
      },
      {
          "name": "インドネシア　バンドン工科大学サマープログラム",
          "url": "url12",
          "outline": "アジア・オセアニア地域から派遣された学生やバンドン工科大学の学生らとともに、寮生活を送りながら、講義受講、研究機関・インフラ施設訪問、現地の言語・文化学習、英語によるプレゼン、郊外へのエクスカーションに参加します。ジャワ島に位置するバンドンは夏でも冷涼な気候で知られています。",
          "period": "7～８月頃",
          "schedule": "5-6月頃",
          "cost": "20万円前後",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程・修士課程・博士課程の学生",
          "contact": "国際交流支援チーム（ko.intl@jim.titech.ac.jp)",
          "ID": "photo9"
      },
      {
          "name": "国立台湾科技大学サマープログラム",
          "url": "url13",
          "outline": "親日派も多く、空路約３時間にある台湾は、初めての留学先として最適な場所のひとつです。寮生活を送りながら、台湾科技大学の学生らとともに講義受講や設定テーマのもと、混合チームで制作に取り組みグループ発表を行います。台湾を代表する企業への訪問も予定されています。",
          "period": "8月予定",
          "schedule": "5月頃",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程",
          "contact": "国際交流支援チーム（ko.intl@jim.titech.ac.jp)",
          "ID": "photo10"
      },
      {
          "name": "防災工学インターナショナルインターンシップ",
          "url": "https://www.titech.ac.jp/students/abroad/programs/earthquake-engineering",
          "outline": "国際大学院プログラム「レジリエントな都市更新に貢献する環境デザイナー育成プログラム」やこれに連動する「環境デザイン特別専門学修プログラム」で推奨する海外インターンシップで、実際に海外に赴き、現地でのカウンターパートの大学教員の指導のもと、現地学生と協働作業で、都市防災を対象とした調査・研究・資料収集・レポート作成並びに発表を行う。",
          "period": "9月",
          "schedule": "5月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "大学院課程学生",
          "contact": "nan",
          "ID": "photo12"
      },
      {
          "name": "国際親善ロボットコンテスト",
          "url": "https://www.titech.ac.jp/students/abroad/programs/idc",
          "outline": "毎年異なるコンテストルールが初日に与えられ、国際混成チームを構成し、チーム毎に2週間でロボットを設計・製作して最終日にコンテストを行う。言葉の壁や異なる国の文化や習慣を超えて、協調してものを作る体験を通して国際的もの作りの難しさや楽しさを学ぶ。",
          "period": "7月か8月",
          "schedule": "毎年4月",
          "cost": "基本無料",
          "application_grade": "nan",
          "contact": "nan",
          "ID": "photo13"
      },
      {
          "name": "国際的建築家育成を目指した国際デザインワークショップ",
          "url": "url17",
          "outline": "このプログラムでは、中国の上海および課題敷地の都市に滞在し、現地の教員や学生等との共同により、約2週間の国際デザイン・ワークショップを行う。急速な発展を遂げている中国国内の建築・都市を視察し、調査および設計案の作成やプレゼンテーションを通して、真に国際性豊かな創造性を身につけることが期待される。",
          "period": "11月下旬頃",
          "schedule": "8月上旬頃",
          "cost": "15-25万円",
          "application_grade": "環境・社会理工学院 建築学系 修士課程",
          "contact": "環境・社会理工学院 建築学系 准教授 村田涼 murata.r.ac@m.titech.a.jp",
          "ID": "photo14"
      },
      {
          "name": "国立台湾科技大学２TOP-CDPEプログラム",
          "url": "nan",
          "outline": "国立台湾科技大学にて、現地の学生との混合チームにて、英語でプロジェクト制作に取り組む。",
          "period": "8月17日～8月31日（24年度）2週間程度",
          "schedule": "7月末頃",
          "cost": "本学からの奨学金支給の予定はないが、期間中の宿泊は台湾科技大学の寮が無償で提供される",
          "application_grade": "＊応募時に、工学院、物質理工学院、環境・社会理工学院に所属する学士課程2年生或いは3年生であること",
          "contact": "国際交流支援チーム（ko.intl@jim.titech.ac.jp)",
          "ID": "photo40"
      }
  ],
  "H1P3": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      },
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "TAIST-Science Tokyo Student Exchange Program in Thailand",
          "url": "https://www.titech.ac.jp/public-relations/global/featured/taist",
          "outline": "Science Tokyo、タイ国立科学技術開発庁、タイの5大学、タイ学術研究会議による国際連携大学院TAIST（タイスト）を活用した学生交流プログラム。 自動車・先進交通工学 をテーマとしたA2TE、AIとIoTをテーマとしたAIoT、持続可能なエネルギー・資源工学 をテーマとしたSEREのいずれかのプログラムに参加し、バンコク郊外のタイランドサイエンスパークにて関連分野の研究室でインターンシップやTAIST講義の受講に取り組む。",
          "period": "5月から3月",
          "schedule": "プログラムごとに設定",
          "cost": "20-25万円",
          "application_grade": "プログラムごとに設定",
          "contact": "nan",
          "ID": "photo11"
      },
      {
          "name": "キャンパスアジアプラス",
          "url": "http://www.ipo.titech.ac.jp/campusasia/japanese/dispatch/",
          "outline": "韓国科学技術院 [KAIST]（韓国）、清華大学（中国）、南洋理工大学（シンガポール）との共同運営プログラム。派遣先大学では、研究室に所属し研究活動を行うほか、授業履修も可能。サマースクールも行っている。最先端科学技術における専門性を強みとしながら、異分野の専門家たちと協働して知的成果を生み出せる人材育成をめざす。",
          "period": "7月～9月、8or9月～12or1月、1月～5月",
          "schedule": "各大学の募集要項参照",
          "cost": "10万円以内",
          "application_grade": "学士課程3年生以上及び大学院課程学生",
          "contact": "nan",
          "ID": "photo18"
      },
      {
          "name": "NAKATANI RIES",
          "url": "https://www.titech.ac.jp/students/abroad/programs/nakataniries",
          "outline": "NAKATANI RIES 国際学生交流プログラムは、中谷財団の支援のもと、学部学生が海外の大学の研究室で研究を体験できるユニークな夏季リサーチインターンシッププログラムです。",
          "period": "8月-9月",
          "schedule": "2月",
          "cost": "ほぼ自己負担なし",
          "application_grade": "応募時点で学士課程1年生～3年生の者",
          "contact": "nan",
          "ID": "photo31"
      },
      {
          "name": "TOMODACHI STEM",
          "url": "https://www.titech.ac.jp/students/abroad/programs/tomodachi",
          "outline": "TOMODACHI-STEM Women’s Leadership and Research Programは、日本の大学で理工系を専攻する女性の大学生１０名を対象とした５週間の研究インターンシッププログラムです。",
          "period": "11月オンライン学習 2月～3月現地",
          "schedule": "8月",
          "cost": "20-40万円",
          "application_grade": "日本の大学の理工系学士正規課程に所属しする18歳以上の女子学生。",
          "contact": "nan",
          "ID": "photo32"
      }
  ],
  "H1P4": [
      {
          "name": "インペリアルカレッジロンドンとの研究留学プログラム（IROP)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/irop",
          "outline": "インペリアル・カレッジ・ロンドンの夏休み時期にインペリアルの研究室に滞在し、2か月間にわたって受入教員の元で研究を行う。",
          "period": "7～8月の8週間",
          "schedule": "45627",
          "cost": "90万円",
          "application_grade": "本学正規課程の学士課程3年生以上及び修士課程学生",
          "contact": "nan",
          "ID": "photo19"
      },
      {
          "name": "SERP",
          "url": "https://www.titech.ac.jp/students/abroad/programs/serp",
          "outline": "工学院、物質理工学院、環境・社会理工学院がSERP協定を結んでいる大学の工学系研究室へ、本学に在籍したまま３ヶ月程度、研究留学する部局間協定に基づくプログラム。 本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "70-120万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo20"
      },
      {
          "name": "AOTULE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aotule",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOTULE協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間協定に基づくプログラム。本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo21"
      },
      {
          "name": "AOSU",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aosu",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOSU協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間 協定に基づくプログラム。本学に授業料を支払うことで、留学生の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo22"
      },
      {
          "name": "物質理工学院学生交流プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/school03",
          "outline": "物質理工学院で交流協定を結んでいる大学・研究機関への派遣・留学",
          "period": "3か月～",
          "schedule": "4月・11月",
          "cost": "70-120万円",
          "application_grade": "修士課程以上",
          "contact": "nan",
          "ID": "photo23"
      },
      {
          "name": "IAESTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/iaeste",
          "outline": "IAESTEは、理工学系学生のための国際インターンシップ（最短8 週間～最長52 週間・海外企業又は海外の大学での現場研修）を仲介している国際非政府団体。広い国際的視野を有するエンジニアを養成することを目的として、これまでに国内外で約37 万人の学生を相互交換している。",
          "period": "8週間～52週間（夏期2～3ヶ月が一般的）",
          "schedule": "派遣前年度の１０月中旬",
          "cost": "渡航費、海外旅行保険、ビザ申請費用等は自己負担。派遣先機関が給与支給、滞在先を確保する。",
          "application_grade": "研修開始時に、日本の大学の学士課程3年生以上及び大学院課程に在籍している者",
          "contact": "nan",
          "ID": "photo29"
      }
  ],
  "H2L1P1": [],
  "H2L1P2": [
      {
          "name": "アントレプレナーシップグローバル海外研修プログラム",
          "url": "http://www.ghrd.titech.ac.jp/course/program/overseas/study_abroad_program/",
          "outline": "世界トップレベルの大学での授業の聴講、学生交流、ラボ見学や、国際機関や現地企業の訪問を通じて、長期留学や海外でのキャリア形成に備える体験留学。",
          "period": "8～9月 2～3月",
          "schedule": "夏派遣：５月頃 春派遣：10月頃",
          "cost": "18～40万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo1"
      }
  ],
  "H2L1P3": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      }
  ],
  "H2L1P4": [],
  "H2L2P1": [],
  "H2L2P2": [
      {
          "name": "アントレプレナーシップグローバル海外研修プログラム",
          "url": "http://www.ghrd.titech.ac.jp/course/program/overseas/study_abroad_program/",
          "outline": "世界トップレベルの大学での授業の聴講、学生交流、ラボ見学や、国際機関や現地企業の訪問を通じて、長期留学や海外でのキャリア形成に備える体験留学。",
          "period": "8～9月 2～3月",
          "schedule": "夏派遣：５月頃 春派遣：10月頃",
          "cost": "18～40万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo1"
      }
  ],
  "H2L2P3": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      }
  ],
  "H2L2P4": [],
  "H2L3P1": [
      {
          "name": "インペリアル・カレッジ・ロンドンとの博士後期課程学生交流プログラム（GFP/インペリアル)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/gfp-imperial",
          "outline": "インペリアル・カレッジ・ロンドンの博士後期課程学生と寝食を共にしながら、専門分野の垣根を越えて世界規模の課題、持続可能な開発目標SDGsについて考える約1週間の合宿型国際交流プログラム。ロンドン又は東京において毎年交代で開催される。2025年は9月に東京で開催。本プログラム終了後、希望者はインペリアル・カレッジ・ロンドンにて1ヶ月から3ヶ月間の研究室滞在を行うことができる。",
          "period": "未定",
          "schedule": "未定",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "博士課程学生",
          "contact": "nan",
          "ID": "photo8"
      },
      {
          "name": "ASPIREリーグ",
          "url": "https://www.titech.ac.jp/international-cooperation/global/featured/aspire",
          "outline": "ASPIREリーグは、香港科技大学、韓国科学技術院、南洋理工大学、清華大学、本学のアジア理工系トップ5大学で構成されたコンソーシアム。毎年6 ～ 7月に議長校で開催されるフォーラムに合わせ、学生ワークショップを開催。特定のテーマに関連した講義や研究施設見学、グループワーク等の活動に参加し、最終日にグループ発表を行う。",
          "period": "7月上旬～中旬頃",
          "schedule": "4-5月",
          "cost": "20-30万",
          "application_grade": "大学院課程学生",
          "contact": "nan",
          "ID": "photo6"
      }
  ],
  "H2L3P2": [
      {
          "name": "アントレプレナーシップグローバル海外研修プログラム",
          "url": "http://www.ghrd.titech.ac.jp/course/program/overseas/study_abroad_program/",
          "outline": "世界トップレベルの大学での授業の聴講、学生交流、ラボ見学や、国際機関や現地企業の訪問を通じて、長期留学や海外でのキャリア形成に備える体験留学。",
          "period": "8～9月 2～3月",
          "schedule": "夏派遣：５月頃 春派遣：10月頃",
          "cost": "18～40万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo1"
      },
      {
          "name": "Science Tokyo-AYSEAS",
          "url": "https://www.titech.ac.jp/students/abroad/programs/ayseas",
          "outline": "※医歯学系学生応募可能 東南アジアに赴き、現地・近隣国の大学生と共に企業・政府機関・大学などを訪問する。参加学生は、科学者・技術者の卵として日本も含めたアジアの開発・発展における科学技術の役割というテーマの下、現地調査で得た知見に基づきディスカッションを行い、現地訪問最終日に各ディスカッショングループとしての結論を発表する。",
          "period": "9月の10日程度。事前学習あり",
          "schedule": "5月中旬頃",
          "cost": "旅費（航空券・ホテルなどを含め20~30万円程度）は原則自費。ただし、奨学金給付の可能性あり。",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo4"
      }
  ],
  "H2L3P3": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      },
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "キャンパスアジアプラス",
          "url": "http://www.ipo.titech.ac.jp/campusasia/japanese/dispatch/",
          "outline": "韓国科学技術院 [KAIST]（韓国）、清華大学（中国）、南洋理工大学（シンガポール）との共同運営プログラム。派遣先大学では、研究室に所属し研究活動を行うほか、授業履修も可能。サマースクールも行っている。最先端科学技術における専門性を強みとしながら、異分野の専門家たちと協働して知的成果を生み出せる人材育成をめざす。",
          "period": "7月～9月、8or9月～12or1月、1月～5月",
          "schedule": "各大学の募集要項参照",
          "cost": "10万円以内",
          "application_grade": "学士課程3年生以上及び大学院課程学生",
          "contact": "nan",
          "ID": "photo18"
      }
  ],
  "H2L3P4": [
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "SERP",
          "url": "https://www.titech.ac.jp/students/abroad/programs/serp",
          "outline": "工学院、物質理工学院、環境・社会理工学院がSERP協定を結んでいる大学の工学系研究室へ、本学に在籍したまま３ヶ月程度、研究留学する部局間協定に基づくプログラム。 本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "70-120万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo20"
      },
      {
          "name": "AOTULE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aotule",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOTULE協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間協定に基づくプログラム。本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo21"
      },
      {
          "name": "AOSU",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aosu",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOSU協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間 協定に基づくプログラム。本学に授業料を支払うことで、留学生の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo22"
      },
      {
          "name": "キャンパスアジアプラス",
          "url": "http://www.ipo.titech.ac.jp/campusasia/japanese/dispatch/",
          "outline": "韓国科学技術院 [KAIST]（韓国）、清華大学（中国）、南洋理工大学（シンガポール）との共同運営プログラム。派遣先大学では、研究室に所属し研究活動を行うほか、授業履修も可能。サマースクールも行っている。最先端科学技術における専門性を強みとしながら、異分野の専門家たちと協働して知的成果を生み出せる人材育成をめざす。",
          "period": "7月～9月、8or9月～12or1月、1月～5月",
          "schedule": "各大学の募集要項参照",
          "cost": "10万円以内",
          "application_grade": "学士課程3年生以上及び大学院課程学生",
          "contact": "nan",
          "ID": "photo18"
      }
  ],
  "H2L4P1": [
      {
          "name": "インペリアル・カレッジ・ロンドンとの博士後期課程学生交流プログラム（GFP/インペリアル)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/gfp-imperial",
          "outline": "インペリアル・カレッジ・ロンドンの博士後期課程学生と寝食を共にしながら、専門分野の垣根を越えて世界規模の課題、持続可能な開発目標SDGsについて考える約1週間の合宿型国際交流プログラム。ロンドン又は東京において毎年交代で開催される。2025年は9月に東京で開催。本プログラム終了後、希望者はインペリアル・カレッジ・ロンドンにて1ヶ月から3ヶ月間の研究室滞在を行うことができる。",
          "period": "未定",
          "schedule": "未定",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "博士課程学生",
          "contact": "nan",
          "ID": "photo8"
      },
      {
          "name": "ASPIREリーグ",
          "url": "https://www.titech.ac.jp/international-cooperation/global/featured/aspire",
          "outline": "ASPIREリーグは、香港科技大学、韓国科学技術院、南洋理工大学、清華大学、本学のアジア理工系トップ5大学で構成されたコンソーシアム。毎年6 ～ 7月に議長校で開催されるフォーラムに合わせ、学生ワークショップを開催。特定のテーマに関連した講義や研究施設見学、グループワーク等の活動に参加し、最終日にグループ発表を行う。",
          "period": "7月上旬～中旬頃",
          "schedule": "4-5月",
          "cost": "20-30万",
          "application_grade": "大学院課程学生",
          "contact": "nan",
          "ID": "photo6"
      }
  ],
  "H2L4P2": [
      {
          "name": "アントレプレナーシップグローバル海外研修プログラム",
          "url": "http://www.ghrd.titech.ac.jp/course/program/overseas/study_abroad_program/",
          "outline": "世界トップレベルの大学での授業の聴講、学生交流、ラボ見学や、国際機関や現地企業の訪問を通じて、長期留学や海外でのキャリア形成に備える体験留学。",
          "period": "8～9月 2～3月",
          "schedule": "夏派遣：５月頃 春派遣：10月頃",
          "cost": "18～40万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo1"
      }
  ],
  "H2L4P3": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      },
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "インペリアルカレッジロンドンとの研究留学プログラム（IROP)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/irop",
          "outline": "インペリアル・カレッジ・ロンドンの夏休み時期にインペリアルの研究室に滞在し、2か月間にわたって受入教員の元で研究を行う。",
          "period": "7～8月の8週間",
          "schedule": "45627",
          "cost": "90万円",
          "application_grade": "本学正規課程の学士課程3年生以上及び修士課程学生",
          "contact": "nan",
          "ID": "photo19"
      },
      {
          "name": "NAKATANI RIES",
          "url": "https://www.titech.ac.jp/students/abroad/programs/nakataniries",
          "outline": "NAKATANI RIES 国際学生交流プログラムは、中谷財団の支援のもと、学部学生が海外の大学の研究室で研究を体験できるユニークな夏季リサーチインターンシッププログラムです。",
          "period": "8月-9月",
          "schedule": "2月",
          "cost": "ほぼ自己負担なし",
          "application_grade": "応募時点で学士課程1年生～3年生の者",
          "contact": "nan",
          "ID": "photo31"
      }
  ],
  "H2L4P4": [
      {
          "name": "物質理工学院学生交流プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/school03",
          "outline": "物質理工学院で交流協定を結んでいる大学・研究機関への派遣・留学",
          "period": "3か月～",
          "schedule": "4月・11月",
          "cost": "70-120万円",
          "application_grade": "修士課程以上",
          "contact": "nan",
          "ID": "photo23"
      },
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "東京科学大学•清華大学大学院合同プログラム",
          "url": "http://www.ipo.titech.ac.jp/tsinghua/",
          "outline": "中国の清華大学と本学の双方に修士課程学生として在籍し、両大学の教員の指導を受けながら研究を行い、両大学の修士号取得を目指すダブルディグリープログラム。 修了に要する標準期間は本学で２年６ヵ月、清華大学で２年間。（清華大学での滞在期間１年間）",
          "period": "2年6ヶ月",
          "schedule": "6月",
          "cost": "70-200万円",
          "application_grade": "学士の学位を有していること",
          "contact": "nan",
          "ID": "photo25"
      },
      {
          "name": "ポンゼショセとのデュアルディグリープログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/t-enpc-dd",
          "outline": "フランス L'École des Ponts ParisTechとの部局間協定に基づいた学習を修了し、最短3年間で双方の大学からそれぞれ修士号を取得する。",
          "period": "3年間",
          "schedule": "6月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院所属の修士課程学生",
          "contact": "nan",
          "ID": "photo26"
      },
      {
          "name": "東京科学大学・韓国科学技術院 大学院ダブルディグリープログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/t-kaist-dd",
          "outline": "韓国科学技術院（KAIST）との部局間協定に基づいた学習を修了し、標準2.5年間でKAISTからMaster of Science・本学から修士（工学）の学位を取得する",
          "period": "2.5年",
          "schedule": "4月・10月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "工学院機械系・システム制御系に在籍中の修士課程学生もしくは進学予定の学部４年生",
          "contact": "nan",
          "ID": "photo27"
      },
      {
          "name": "IAESTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/iaeste",
          "outline": "IAESTEは、理工学系学生のための国際インターンシップ（最短8 週間～最長52 週間・海外企業又は海外の大学での現場研修）を仲介している国際非政府団体。広い国際的視野を有するエンジニアを養成することを目的として、これまでに国内外で約37 万人の学生を相互交換している。",
          "period": "8週間～52週間（夏期2～3ヶ月が一般的）",
          "schedule": "派遣前年度の１０月中旬",
          "cost": "渡航費、海外旅行保険、ビザ申請費用等は自己負担。派遣先機関が給与支給、滞在先を確保する。",
          "application_grade": "研修開始時に、日本の大学の学士課程3年生以上及び大学院課程に在籍している者",
          "contact": "nan",
          "ID": "photo29"
      },
      {
          "name": "ヴルカヌス・イン・ヨーロッパ",
          "url": "https://www.titech.ac.jp/students/abroad/programs/eu-japan",
          "outline": "日本の理工系学生を対象に 1 年間 EU 加盟国で研修を行うプログラムです。語学研修と企業研修（インターンシップ）で構成されており、語学研修では、企業研修で使用する言語の習得をめざし、企業研修に臨みます。",
          "period": "1年間（4月-翌3月まで）",
          "schedule": "前年度9月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "応募時点で、日本の大学において理工学系の学士課程3～4年生",
          "contact": "nan",
          "ID": "photo30"
      },
      {
          "name": "キャンパスアジアプラス",
          "url": "http://www.ipo.titech.ac.jp/campusasia/japanese/dispatch/",
          "outline": "韓国科学技術院 [KAIST]（韓国）、清華大学（中国）、南洋理工大学（シンガポール）との共同運営プログラム。派遣先大学では、研究室に所属し研究活動を行うほか、授業履修も可能。サマースクールも行っている。最先端科学技術における専門性を強みとしながら、異分野の専門家たちと協働して知的成果を生み出せる人材育成をめざす。",
          "period": "7月～9月、8or9月～12or1月、1月～5月",
          "schedule": "各大学の募集要項参照",
          "cost": "10万円以内",
          "application_grade": "学士課程3年生以上及び大学院課程学生",
          "contact": "nan",
          "ID": "photo18"
      },
      {
          "name": "SERP",
          "url": "https://www.titech.ac.jp/students/abroad/programs/serp",
          "outline": "工学院、物質理工学院、環境・社会理工学院がSERP協定を結んでいる大学の工学系研究室へ、本学に在籍したまま３ヶ月程度、研究留学する部局間協定に基づくプログラム。 本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "70-120万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo20"
      }
  ],
  "H2L5P1": [
      {
          "name": "インペリアル・カレッジ・ロンドンとの博士後期課程学生交流プログラム（GFP/インペリアル)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/gfp-imperial",
          "outline": "インペリアル・カレッジ・ロンドンの博士後期課程学生と寝食を共にしながら、専門分野の垣根を越えて世界規模の課題、持続可能な開発目標SDGsについて考える約1週間の合宿型国際交流プログラム。ロンドン又は東京において毎年交代で開催される。2025年は9月に東京で開催。本プログラム終了後、希望者はインペリアル・カレッジ・ロンドンにて1ヶ月から3ヶ月間の研究室滞在を行うことができる。",
          "period": "未定",
          "schedule": "未定",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "博士課程学生",
          "contact": "nan",
          "ID": "photo8"
      },
      {
          "name": "ASPIREリーグ",
          "url": "https://www.titech.ac.jp/international-cooperation/global/featured/aspire",
          "outline": "ASPIREリーグは、香港科技大学、韓国科学技術院、南洋理工大学、清華大学、本学のアジア理工系トップ5大学で構成されたコンソーシアム。毎年6 ～ 7月に議長校で開催されるフォーラムに合わせ、学生ワークショップを開催。特定のテーマに関連した講義や研究施設見学、グループワーク等の活動に参加し、最終日にグループ発表を行う。",
          "period": "7月上旬～中旬頃",
          "schedule": "4-5月",
          "cost": "20-30万",
          "application_grade": "大学院課程学生",
          "contact": "nan",
          "ID": "photo6"
      }
  ],
  "H2L5P2": [],
  "H2L5P3": [
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "インペリアルカレッジロンドンとの研究留学プログラム（IROP)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/irop",
          "outline": "インペリアル・カレッジ・ロンドンの夏休み時期にインペリアルの研究室に滞在し、2か月間にわたって受入教員の元で研究を行う。",
          "period": "7～8月の8週間",
          "schedule": "45627",
          "cost": "90万円",
          "application_grade": "本学正規課程の学士課程3年生以上及び修士課程学生",
          "contact": "nan",
          "ID": "photo19"
      }
  ],
  "H2L5P4": [],
  "H3S1P1": [],
  "H3S1P2": [
      {
          "name": "アントレプレナーシップグローバル海外研修プログラム",
          "url": "http://www.ghrd.titech.ac.jp/course/program/overseas/study_abroad_program/",
          "outline": "世界トップレベルの大学での授業の聴講、学生交流、ラボ見学や、国際機関や現地企業の訪問を通じて、長期留学や海外でのキャリア形成に備える体験留学。",
          "period": "8～9月 2～3月",
          "schedule": "夏派遣：５月頃 春派遣：10月頃",
          "cost": "18～40万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo1"
      }
  ],
  "H3S1P3": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      }
  ],
  "H3S1P4": [],
  "H3S2P1": [],
  "H3S2P2": [
      {
          "name": "アントレプレナーシップグローバル海外研修プログラム",
          "url": "http://www.ghrd.titech.ac.jp/course/program/overseas/study_abroad_program/",
          "outline": "世界トップレベルの大学での授業の聴講、学生交流、ラボ見学や、国際機関や現地企業の訪問を通じて、長期留学や海外でのキャリア形成に備える体験留学。",
          "period": "8～9月 2～3月",
          "schedule": "夏派遣：５月頃 春派遣：10月頃",
          "cost": "18～40万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo1"
      },
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      },
      {
          "name": "国立台湾科技大学２TOP-CDPEプログラム",
          "url": "nan",
          "outline": "国立台湾科技大学にて、現地の学生との混合チームにて、英語でプロジェクト制作に取り組む。",
          "period": "8月17日～8月31日（24年度）2週間程度",
          "schedule": "7月末頃",
          "cost": "本学からの奨学金支給の予定はないが、期間中の宿泊は台湾科技大学の寮が無償で提供される",
          "application_grade": "＊応募時に、工学院、物質理工学院、環境・社会理工学院に所属する学士課程2年生或いは3年生であること",
          "contact": "国際交流支援チーム（ko.intl@jim.titech.ac.jp)",
          "ID": "photo40"
      },
      {
          "name": "Science Tokyo-AYSEAS",
          "url": "https://www.titech.ac.jp/students/abroad/programs/ayseas",
          "outline": "※医歯学系学生応募可能 東南アジアに赴き、現地・近隣国の大学生と共に企業・政府機関・大学などを訪問する。参加学生は、科学者・技術者の卵として日本も含めたアジアの開発・発展における科学技術の役割というテーマの下、現地調査で得た知見に基づきディスカッションを行い、現地訪問最終日に各ディスカッショングループとしての結論を発表する。",
          "period": "9月の10日程度。事前学習あり",
          "schedule": "5月中旬頃",
          "cost": "旅費（航空券・ホテルなどを含め20~30万円程度）は原則自費。ただし、奨学金給付の可能性あり。",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo4"
      }
  ],
  "H3S2P3": [
      {
          "name": "TAIST-Science Tokyo Student Exchange Program in Thailand",
          "url": "https://www.titech.ac.jp/public-relations/global/featured/taist",
          "outline": "Science Tokyo、タイ国立科学技術開発庁、タイの5大学、タイ学術研究会議による国際連携大学院TAIST（タイスト）を活用した学生交流プログラム。 自動車・先進交通工学 をテーマとしたA2TE、AIとIoTをテーマとしたAIoT、持続可能なエネルギー・資源工学 をテーマとしたSEREのいずれかのプログラムに参加し、バンコク郊外のタイランドサイエンスパークにて関連分野の研究室でインターンシップやTAIST講義の受講に取り組む。",
          "period": "5月から3月",
          "schedule": "プログラムごとに設定",
          "cost": "20-25万円",
          "application_grade": "プログラムごとに設定",
          "contact": "nan",
          "ID": "photo11"
      },
      {
          "name": "物質理工学院学生交流プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/school03",
          "outline": "物質理工学院で交流協定を結んでいる大学・研究機関への派遣・留学",
          "period": "3か月～",
          "schedule": "4月・11月",
          "cost": "70-120万円",
          "application_grade": "修士課程以上",
          "contact": "nan",
          "ID": "photo23"
      },
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      },
      {
          "name": "SERP",
          "url": "https://www.titech.ac.jp/students/abroad/programs/serp",
          "outline": "工学院、物質理工学院、環境・社会理工学院がSERP協定を結んでいる大学の工学系研究室へ、本学に在籍したまま３ヶ月程度、研究留学する部局間協定に基づくプログラム。 本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "70-120万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo20"
      },
      {
          "name": "AOTULE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aotule",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOTULE協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間協定に基づくプログラム。本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo21"
      },
      {
          "name": "AOSU",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aosu",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOSU協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間 協定に基づくプログラム。本学に授業料を支払うことで、留学生の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo22"
      }
  ],
  "H3S2P4": [
      {
          "name": "TAIST-Science Tokyo Student Exchange Program in Thailand",
          "url": "https://www.titech.ac.jp/public-relations/global/featured/taist",
          "outline": "Science Tokyo、タイ国立科学技術開発庁、タイの5大学、タイ学術研究会議による国際連携大学院TAIST（タイスト）を活用した学生交流プログラム。 自動車・先進交通工学 をテーマとしたA2TE、AIとIoTをテーマとしたAIoT、持続可能なエネルギー・資源工学 をテーマとしたSEREのいずれかのプログラムに参加し、バンコク郊外のタイランドサイエンスパークにて関連分野の研究室でインターンシップやTAIST講義の受講に取り組む。",
          "period": "5月から3月",
          "schedule": "プログラムごとに設定",
          "cost": "20-25万円",
          "application_grade": "プログラムごとに設定",
          "contact": "nan",
          "ID": "photo11"
      },
      {
          "name": "SERP",
          "url": "https://www.titech.ac.jp/students/abroad/programs/serp",
          "outline": "工学院、物質理工学院、環境・社会理工学院がSERP協定を結んでいる大学の工学系研究室へ、本学に在籍したまま３ヶ月程度、研究留学する部局間協定に基づくプログラム。 本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "70-120万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo20"
      },
      {
          "name": "AOTULE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aotule",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOTULE協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間協定に基づくプログラム。本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo21"
      },
      {
          "name": "AOSU",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aosu",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOSU協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間 協定に基づくプログラム。本学に授業料を支払うことで、留学生の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo22"
      },
      {
          "name": "物質理工学院学生交流プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/school03",
          "outline": "物質理工学院で交流協定を結んでいる大学・研究機関への派遣・留学",
          "period": "3か月～",
          "schedule": "4月・11月",
          "cost": "70-120万円",
          "application_grade": "修士課程以上",
          "contact": "nan",
          "ID": "photo23"
      }
  ],
  "H4PP1P1": [
      {
          "name": "インペリアル・カレッジ・ロンドンとの博士後期課程学生交流プログラム（GFP/インペリアル)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/gfp-imperial",
          "outline": "インペリアル・カレッジ・ロンドンの博士後期課程学生と寝食を共にしながら、専門分野の垣根を越えて世界規模の課題、持続可能な開発目標SDGsについて考える約1週間の合宿型国際交流プログラム。ロンドン又は東京において毎年交代で開催される。2025年は9月に東京で開催。本プログラム終了後、希望者はインペリアル・カレッジ・ロンドンにて1ヶ月から3ヶ月間の研究室滞在を行うことができる。",
          "period": "未定",
          "schedule": "未定",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "博士課程学生",
          "contact": "nan",
          "ID": "photo8"
      }
  ],
  "H4PP1P2": [
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "アントレプレナーシップグローバル海外研修プログラム",
          "url": "http://www.ghrd.titech.ac.jp/course/program/overseas/study_abroad_program/",
          "outline": "世界トップレベルの大学での授業の聴講、学生交流、ラボ見学や、国際機関や現地企業の訪問を通じて、長期留学や海外でのキャリア形成に備える体験留学。",
          "period": "8～9月 2～3月",
          "schedule": "夏派遣：５月頃 春派遣：10月頃",
          "cost": "18～40万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo1"
      },
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      }
  ],
  "H4PP1P3": [
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      }
  ],
  "H4PP1P4": [
      {
          "name": "SERP",
          "url": "https://www.titech.ac.jp/students/abroad/programs/serp",
          "outline": "工学院、物質理工学院、環境・社会理工学院がSERP協定を結んでいる大学の工学系研究室へ、本学に在籍したまま３ヶ月程度、研究留学する部局間協定に基づくプログラム。 本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "70-120万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo20"
      },
      {
          "name": "AOTULE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aotule",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOTULE協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間協定に基づくプログラム。本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo21"
      },
      {
          "name": "東京科学大学•清華大学大学院合同プログラム",
          "url": "http://www.ipo.titech.ac.jp/tsinghua/",
          "outline": "中国の清華大学と本学の双方に修士課程学生として在籍し、両大学の教員の指導を受けながら研究を行い、両大学の修士号取得を目指すダブルディグリープログラム。 修了に要する標準期間は本学で２年６ヵ月、清華大学で２年間。（清華大学での滞在期間１年間）",
          "period": "2年6ヶ月",
          "schedule": "6月",
          "cost": "70-200万円",
          "application_grade": "学士の学位を有していること",
          "contact": "nan",
          "ID": "photo25"
      },
      {
          "name": "派遣交換留学プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/tuitionwaiver",
          "outline": "本学理学系と授業料等不徴収協定を結んでいる海外の大学（協定校）が1学期～1 年間学生を交換する留学プログラムです。現地の大学では自身の専攻に応じた授業履修・研究、課外活動を通じて様々な経験ができます。本プログラムに参加する学生は将来のキャリアを見据えて計画立案から実行、振り返りまでを丁寧に行うことで、グローバルに活躍できる人材になることを目指します。",
          "period": "秋出発：7月～12月 春出発：1月～6月 （1学期以上1年以内）",
          "schedule": "留学開始前年度から開始 秋出発：9月12月4月 春出発：5月6月",
          "cost": "50-200万ほど（地域差あり）",
          "application_grade": "学士2年後期～博士",
          "contact": "nan",
          "ID": "photo5"
      },
      {
          "name": "ポンゼショセとのデュアルディグリープログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/t-enpc-dd",
          "outline": "フランス L'École des Ponts ParisTechとの部局間協定に基づいた学習を修了し、最短3年間で双方の大学からそれぞれ修士号を取得する。",
          "period": "3年間",
          "schedule": "6月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院所属の修士課程学生",
          "contact": "nan",
          "ID": "photo26"
      },
      {
          "name": "東京科学大学・韓国科学技術院 大学院ダブルディグリープログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/t-kaist-dd",
          "outline": "韓国科学技術院（KAIST）との部局間協定に基づいた学習を修了し、標準2.5年間でKAISTからMaster of Science・本学から修士（工学）の学位を取得する",
          "period": "2.5年",
          "schedule": "4月・10月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "工学院機械系・システム制御系に在籍中の修士課程学生もしくは進学予定の学部４年生",
          "contact": "nan",
          "ID": "photo27"
      },
      {
          "name": "台湾国立陽明交通大学とのダブルディグリープログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/t-nctu-dd",
          "outline": "台湾国立陽明交通大学との協定に基づいた学習を修了し、最短2年間で双方の大学からそれぞれ修士号を取得する。",
          "period": "台湾国立陽明交通大学での滞在期間は最短1年間",
          "schedule": "3月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "工学院電気電子系に進学予定の本学学士課程4年生 物質理工学院修士課程に進学予定の本学学士課程4年生",
          "contact": "nan",
          "ID": "photo28"
      }
  ],
  "H4PP2P1": [
      {
          "name": "インペリアル・カレッジ・ロンドンとの博士後期課程学生交流プログラム（GFP/インペリアル)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/gfp-imperial",
          "outline": "インペリアル・カレッジ・ロンドンの博士後期課程学生と寝食を共にしながら、専門分野の垣根を越えて世界規模の課題、持続可能な開発目標SDGsについて考える約1週間の合宿型国際交流プログラム。ロンドン又は東京において毎年交代で開催される。2025年は9月に東京で開催。本プログラム終了後、希望者はインペリアル・カレッジ・ロンドンにて1ヶ月から3ヶ月間の研究室滞在を行うことができる。",
          "period": "未定",
          "schedule": "未定",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "博士課程学生",
          "contact": "nan",
          "ID": "photo8"
      }
  ],
  "H4PP2P2": [],
  "H4PP2P3": [
      {
          "name": "インペリアルカレッジロンドンとの研究留学プログラム（IROP)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/irop",
          "outline": "インペリアル・カレッジ・ロンドンの夏休み時期にインペリアルの研究室に滞在し、2か月間にわたって受入教員の元で研究を行う。",
          "period": "7～8月の8週間",
          "schedule": "45627",
          "cost": "90万円",
          "application_grade": "本学正規課程の学士課程3年生以上及び修士課程学生",
          "contact": "nan",
          "ID": "photo19"
      },
      {
          "name": "キャンパスアジアプラス",
          "url": "http://www.ipo.titech.ac.jp/campusasia/japanese/dispatch/",
          "outline": "韓国科学技術院 [KAIST]（韓国）、清華大学（中国）、南洋理工大学（シンガポール）との共同運営プログラム。派遣先大学では、研究室に所属し研究活動を行うほか、授業履修も可能。サマースクールも行っている。最先端科学技術における専門性を強みとしながら、異分野の専門家たちと協働して知的成果を生み出せる人材育成をめざす。",
          "period": "7月～9月、8or9月～12or1月、1月～5月",
          "schedule": "各大学の募集要項参照",
          "cost": "10万円以内",
          "application_grade": "学士課程3年生以上及び大学院課程学生",
          "contact": "nan",
          "ID": "photo18"
      }
  ],
  "H4PP2P4": [
      {
          "name": "SERP",
          "url": "https://www.titech.ac.jp/students/abroad/programs/serp",
          "outline": "工学院、物質理工学院、環境・社会理工学院がSERP協定を結んでいる大学の工学系研究室へ、本学に在籍したまま３ヶ月程度、研究留学する部局間協定に基づくプログラム。 本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "70-120万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo20"
      },
      {
          "name": "AOTULE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aotule",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOTULE協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間協定に基づくプログラム。本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo21"
      },
      {
          "name": "東京科学大学•清華大学大学院合同プログラム",
          "url": "http://www.ipo.titech.ac.jp/tsinghua/",
          "outline": "中国の清華大学と本学の双方に修士課程学生として在籍し、両大学の教員の指導を受けながら研究を行い、両大学の修士号取得を目指すダブルディグリープログラム。 修了に要する標準期間は本学で２年６ヵ月、清華大学で２年間。（清華大学での滞在期間１年間）",
          "period": "2年6ヶ月",
          "schedule": "6月",
          "cost": "70-200万円",
          "application_grade": "学士の学位を有していること",
          "contact": "nan",
          "ID": "photo25"
      },
      {
          "name": "派遣交換留学プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/tuitionwaiver",
          "outline": "本学理学系と授業料等不徴収協定を結んでいる海外の大学（協定校）が1学期～1 年間学生を交換する留学プログラムです。現地の大学では自身の専攻に応じた授業履修・研究、課外活動を通じて様々な経験ができます。本プログラムに参加する学生は将来のキャリアを見据えて計画立案から実行、振り返りまでを丁寧に行うことで、グローバルに活躍できる人材になることを目指します。",
          "period": "秋出発：7月～12月 春出発：1月～6月 （1学期以上1年以内）",
          "schedule": "留学開始前年度から開始 秋出発：9月12月4月 春出発：5月6月",
          "cost": "50-200万ほど（地域差あり）",
          "application_grade": "学士2年後期～博士",
          "contact": "nan",
          "ID": "photo5"
      },
      {
          "name": "キャンパスアジアプラス",
          "url": "http://www.ipo.titech.ac.jp/campusasia/japanese/dispatch/",
          "outline": "韓国科学技術院 [KAIST]（韓国）、清華大学（中国）、南洋理工大学（シンガポール）との共同運営プログラム。派遣先大学では、研究室に所属し研究活動を行うほか、授業履修も可能。サマースクールも行っている。最先端科学技術における専門性を強みとしながら、異分野の専門家たちと協働して知的成果を生み出せる人材育成をめざす。",
          "period": "7月～9月、8or9月～12or1月、1月～5月",
          "schedule": "各大学の募集要項参照",
          "cost": "10万円以内",
          "application_grade": "学士課程3年生以上及び大学院課程学生",
          "contact": "nan",
          "ID": "photo18"
      },
      {
          "name": "物質理工学院学生交流プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/school03",
          "outline": "物質理工学院で交流協定を結んでいる大学・研究機関への派遣・留学",
          "period": "3か月～",
          "schedule": "4月・11月",
          "cost": "70-120万円",
          "application_grade": "修士課程以上",
          "contact": "nan",
          "ID": "photo23"
      },
      {
          "name": "アーヘン工科大学博士課程学生共同指導プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/mct-aachen",
          "outline": "物質理工学院が学院単独で部局間協定を締結しているアーヘン工科大学電気工学・情報技術学部と学生を共同で指導するプログラム。参加学生は、博士課程中に自身の研究において両大学・両担当教員から指導を受けることができ、本学の学位審査に通った後は、本学からの学位に加え、アーヘン工科大学からプログラム修了証が授与される。",
          "period": "博士課程在籍中に原則6か月以上（通算でも可）",
          "schedule": "原則、渡航開始4か月前の月末",
          "cost": "70-120万円",
          "application_grade": "物質理工学院所属の博士後期課程学生",
          "contact": "nan",
          "ID": "photo24"
      }
  ],
  "H4PP3P1": [
      {
          "name": "インペリアル・カレッジ・ロンドンとの博士後期課程学生交流プログラム（GFP/インペリアル)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/gfp-imperial",
          "outline": "インペリアル・カレッジ・ロンドンの博士後期課程学生と寝食を共にしながら、専門分野の垣根を越えて世界規模の課題、持続可能な開発目標SDGsについて考える約1週間の合宿型国際交流プログラム。ロンドン又は東京において毎年交代で開催される。2025年は9月に東京で開催。本プログラム終了後、希望者はインペリアル・カレッジ・ロンドンにて1ヶ月から3ヶ月間の研究室滞在を行うことができる。",
          "period": "未定",
          "schedule": "未定",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "博士課程学生",
          "contact": "nan",
          "ID": "photo8"
      }
  ],
  "H4PP3P2": [
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      }
  ],
  "H4PP3P3": [
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      }
  ],
  "H4PP3P4": [
      {
          "name": "SERP",
          "url": "https://www.titech.ac.jp/students/abroad/programs/serp",
          "outline": "工学院、物質理工学院、環境・社会理工学院がSERP協定を結んでいる大学の工学系研究室へ、本学に在籍したまま３ヶ月程度、研究留学する部局間協定に基づくプログラム。 本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "70-120万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo20"
      },
      {
          "name": "AOTULE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aotule",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOTULE協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間協定に基づくプログラム。本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo21"
      },
      {
          "name": "東京科学大学•清華大学大学院合同プログラム",
          "url": "http://www.ipo.titech.ac.jp/tsinghua/",
          "outline": "中国の清華大学と本学の双方に修士課程学生として在籍し、両大学の教員の指導を受けながら研究を行い、両大学の修士号取得を目指すダブルディグリープログラム。 修了に要する標準期間は本学で２年６ヵ月、清華大学で２年間。（清華大学での滞在期間１年間）",
          "period": "2年6ヶ月",
          "schedule": "6月",
          "cost": "70-200万円",
          "application_grade": "学士の学位を有していること",
          "contact": "nan",
          "ID": "photo25"
      },
      {
          "name": "派遣交換留学プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/tuitionwaiver",
          "outline": "本学理学系と授業料等不徴収協定を結んでいる海外の大学（協定校）が1学期～1 年間学生を交換する留学プログラムです。現地の大学では自身の専攻に応じた授業履修・研究、課外活動を通じて様々な経験ができます。本プログラムに参加する学生は将来のキャリアを見据えて計画立案から実行、振り返りまでを丁寧に行うことで、グローバルに活躍できる人材になることを目指します。",
          "period": "秋出発：7月～12月 春出発：1月～6月 （1学期以上1年以内）",
          "schedule": "留学開始前年度から開始 秋出発：9月12月4月 春出発：5月6月",
          "cost": "50-200万ほど（地域差あり）",
          "application_grade": "学士2年後期～博士",
          "contact": "nan",
          "ID": "photo5"
      }
  ],
  "H4PP4P1": [
      {
          "name": "インペリアル・カレッジ・ロンドンとの博士後期課程学生交流プログラム（GFP/インペリアル)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/gfp-imperial",
          "outline": "インペリアル・カレッジ・ロンドンの博士後期課程学生と寝食を共にしながら、専門分野の垣根を越えて世界規模の課題、持続可能な開発目標SDGsについて考える約1週間の合宿型国際交流プログラム。ロンドン又は東京において毎年交代で開催される。2025年は9月に東京で開催。本プログラム終了後、希望者はインペリアル・カレッジ・ロンドンにて1ヶ月から3ヶ月間の研究室滞在を行うことができる。",
          "period": "未定",
          "schedule": "未定",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "博士課程学生",
          "contact": "nan",
          "ID": "photo8"
      }
  ],
  "H4PP4P2": [
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "国立台湾科技大学２TOP-CDPEプログラム",
          "url": "nan",
          "outline": "国立台湾科技大学にて、現地の学生との混合チームにて、英語でプロジェクト制作に取り組む。",
          "period": "8月17日～8月31日（24年度）2週間程度",
          "schedule": "7月末頃",
          "cost": "本学からの奨学金支給の予定はないが、期間中の宿泊は台湾科技大学の寮が無償で提供される",
          "application_grade": "＊応募時に、工学院、物質理工学院、環境・社会理工学院に所属する学士課程2年生或いは3年生であること",
          "contact": "国際交流支援チーム（ko.intl@jim.titech.ac.jp)",
          "ID": "photo40"
      }
  ],
  "H4PP4P3": [
      {
          "name": "インペリアルカレッジロンドンとの研究留学プログラム（IROP)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/irop",
          "outline": "インペリアル・カレッジ・ロンドンの夏休み時期にインペリアルの研究室に滞在し、2か月間にわたって受入教員の元で研究を行う。",
          "period": "7～8月の8週間",
          "schedule": "45627",
          "cost": "90万円",
          "application_grade": "本学正規課程の学士課程3年生以上及び修士課程学生",
          "contact": "nan",
          "ID": "photo19"
      },
      {
          "name": "キャンパスアジアプラス",
          "url": "http://www.ipo.titech.ac.jp/campusasia/japanese/dispatch/",
          "outline": "韓国科学技術院 [KAIST]（韓国）、清華大学（中国）、南洋理工大学（シンガポール）との共同運営プログラム。派遣先大学では、研究室に所属し研究活動を行うほか、授業履修も可能。サマースクールも行っている。最先端科学技術における専門性を強みとしながら、異分野の専門家たちと協働して知的成果を生み出せる人材育成をめざす。",
          "period": "7月～9月、8or9月～12or1月、1月～5月",
          "schedule": "各大学の募集要項参照",
          "cost": "10万円以内",
          "application_grade": "学士課程3年生以上及び大学院課程学生",
          "contact": "nan",
          "ID": "photo18"
      }
  ],
  "H4PP4P4": [
      {
          "name": "SERP",
          "url": "https://www.titech.ac.jp/students/abroad/programs/serp",
          "outline": "工学院、物質理工学院、環境・社会理工学院がSERP協定を結んでいる大学の工学系研究室へ、本学に在籍したまま３ヶ月程度、研究留学する部局間協定に基づくプログラム。 本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "70-120万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo20"
      },
      {
          "name": "AOTULE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aotule",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOTULE協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間協定に基づくプログラム。本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo21"
      },
      {
          "name": "東京科学大学•清華大学大学院合同プログラム",
          "url": "http://www.ipo.titech.ac.jp/tsinghua/",
          "outline": "中国の清華大学と本学の双方に修士課程学生として在籍し、両大学の教員の指導を受けながら研究を行い、両大学の修士号取得を目指すダブルディグリープログラム。 修了に要する標準期間は本学で２年６ヵ月、清華大学で２年間。（清華大学での滞在期間１年間）",
          "period": "2年6ヶ月",
          "schedule": "6月",
          "cost": "70-200万円",
          "application_grade": "学士の学位を有していること",
          "contact": "nan",
          "ID": "photo25"
      },
      {
          "name": "派遣交換留学プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/tuitionwaiver",
          "outline": "本学理学系と授業料等不徴収協定を結んでいる海外の大学（協定校）が1学期～1 年間学生を交換する留学プログラムです。現地の大学では自身の専攻に応じた授業履修・研究、課外活動を通じて様々な経験ができます。本プログラムに参加する学生は将来のキャリアを見据えて計画立案から実行、振り返りまでを丁寧に行うことで、グローバルに活躍できる人材になることを目指します。",
          "period": "秋出発：7月～12月 春出発：1月～6月 （1学期以上1年以内）",
          "schedule": "留学開始前年度から開始 秋出発：9月12月4月 春出発：5月6月",
          "cost": "50-200万ほど（地域差あり）",
          "application_grade": "学士2年後期～博士",
          "contact": "nan",
          "ID": "photo5"
      },
      {
          "name": "キャンパスアジアプラス",
          "url": "http://www.ipo.titech.ac.jp/campusasia/japanese/dispatch/",
          "outline": "韓国科学技術院 [KAIST]（韓国）、清華大学（中国）、南洋理工大学（シンガポール）との共同運営プログラム。派遣先大学では、研究室に所属し研究活動を行うほか、授業履修も可能。サマースクールも行っている。最先端科学技術における専門性を強みとしながら、異分野の専門家たちと協働して知的成果を生み出せる人材育成をめざす。",
          "period": "7月～9月、8or9月～12or1月、1月～5月",
          "schedule": "各大学の募集要項参照",
          "cost": "10万円以内",
          "application_grade": "学士課程3年生以上及び大学院課程学生",
          "contact": "nan",
          "ID": "photo18"
      },
      {
          "name": "物質理工学院学生交流プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/school03",
          "outline": "物質理工学院で交流協定を結んでいる大学・研究機関への派遣・留学",
          "period": "3か月～",
          "schedule": "4月・11月",
          "cost": "70-120万円",
          "application_grade": "修士課程以上",
          "contact": "nan",
          "ID": "photo23"
      },
      {
          "name": "アーヘン工科大学博士課程学生共同指導プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/mct-aachen",
          "outline": "物質理工学院が学院単独で部局間協定を締結しているアーヘン工科大学電気工学・情報技術学部と学生を共同で指導するプログラム。参加学生は、博士課程中に自身の研究において両大学・両担当教員から指導を受けることができ、本学の学位審査に通った後は、本学からの学位に加え、アーヘン工科大学からプログラム修了証が授与される。",
          "period": "博士課程在籍中に原則6か月以上（通算でも可）",
          "schedule": "原則、渡航開始4か月前の月末",
          "cost": "70-120万円",
          "application_grade": "物質理工学院所属の博士後期課程学生",
          "contact": "nan",
          "ID": "photo24"
      },
      {
          "name": "想像的デザインとものづくりのための共同教育プログラム",
          "url": "nan",
          "outline": "デンマーク王立芸術アカデミー建築学部（Royal Danish Academy - Architecture, Design, Conservation）と本学環境・社会理工学院との部局間協定に基づく、建築・都市デザイン分野の大学院生を対象とする学生交流プログラムです。",
          "period": "2セメスターまたは1セメスター（秋学期：9月〜1月、春学期：2月〜6月）",
          "schedule": "秋学期からの派遣は2月末、春学期からの派遣は8月末を予定",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "環境・社会理工学院 修士課程または博士課程",
          "contact": "環境・社会理工学院 建築学系 准教授 村田涼 murata.r.ac@m.titech.a.jp",
          "ID": "photo15"
      },
      {
          "name": "伝統的文化資源を活用した都市観光学の育成プログラム",
          "url": "nan",
          "outline": "ベルギーのルーヴェン・カトリック大学建築学部（KU Leuven, School of Architecture）と本学環境・社会理工学院との部局間協定に基づく、建築・都市デザイン分野の大学院生を対象とする学生交流プログラムです。",
          "period": "2セメスターまたは1セメスター（秋学期：9月〜2月、春学期：2月〜7月）",
          "schedule": "秋学期からの派遣は2月末、春学期からの派遣は8月末を予定",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "環境・社会理工学院 修士課程または博士課程",
          "contact": "環境・社会理工学院 建築学系 准教授 村田涼 murata.r.ac@m.titech.a.jp",
          "ID": "photo16"
      },
      {
          "name": "産業遺産のアダプティブリユースデザインの創生プログラム",
          "url": "nan",
          "outline": "イタリアのトリノ工科大学建築デザイン学科（Politecnico di Torino, Department of Architecture and Design）と本学環境・社会理工学院との部局間協定に基づく、建築学系の主に歴史意匠、都市景観、まちづくり分野の大学院生を対象とする学生交流プログラムです。",
          "period": "2セメスターまたは1セメスター（秋学期：9月〜1月、春学期：2月〜6月）",
          "schedule": "秋学期からの派遣は2月末、春学期からの派遣は8月末を予定",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "環境・社会理工学院 建築学系 修士課程",
          "contact": "環境・社会理工学院 建築学系 准教授 村田涼 murata.r.ac@m.titech.a.jp",
          "ID": "photo17"
      }
  ],
  "H4PP5P1": [],
  "H4PP5P2": [
      {
          "name": "国際的建築家育成を目指した国際デザインワークショップ",
          "url": "url17",
          "outline": "このプログラムでは、中国の上海および課題敷地の都市に滞在し、現地の教員や学生等との共同により、約2週間の国際デザイン・ワークショップを行う。急速な発展を遂げている中国国内の建築・都市を視察し、調査および設計案の作成やプレゼンテーションを通して、真に国際性豊かな創造性を身につけることが期待される。",
          "period": "11月下旬頃",
          "schedule": "8月上旬頃",
          "cost": "15-25万円",
          "application_grade": "環境・社会理工学院 建築学系 修士課程",
          "contact": "環境・社会理工学院 建築学系 准教授 村田涼 murata.r.ac@m.titech.a.jp",
          "ID": "photo14"
      },
      {
          "name": "Science Tokyo-AYSEAS",
          "url": "https://www.titech.ac.jp/students/abroad/programs/ayseas",
          "outline": "※医歯学系学生応募可能 東南アジアに赴き、現地・近隣国の大学生と共に企業・政府機関・大学などを訪問する。参加学生は、科学者・技術者の卵として日本も含めたアジアの開発・発展における科学技術の役割というテーマの下、現地調査で得た知見に基づきディスカッションを行い、現地訪問最終日に各ディスカッショングループとしての結論を発表する。",
          "period": "9月の10日程度。事前学習あり",
          "schedule": "5月中旬頃",
          "cost": "旅費（航空券・ホテルなどを含め20~30万円程度）は原則自費。ただし、奨学金給付の可能性あり。",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo4"
      }
  ],
  "H4PP5P3": [],
  "H4PP5P4": [],
  "H4PP6P1": [],
  "H4PP6P2": [],
  "H4PP6P3": [
      {
          "name": "IAESTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/iaeste",
          "outline": "IAESTEは、理工学系学生のための国際インターンシップ（最短8 週間～最長52 週間・海外企業又は海外の大学での現場研修）を仲介している国際非政府団体。広い国際的視野を有するエンジニアを養成することを目的として、これまでに国内外で約37 万人の学生を相互交換している。",
          "period": "8週間～52週間（夏期2～3ヶ月が一般的）",
          "schedule": "派遣前年度の１０月中旬",
          "cost": "渡航費、海外旅行保険、ビザ申請費用等は自己負担。派遣先機関が給与支給、滞在先を確保する。",
          "application_grade": "研修開始時に、日本の大学の学士課程3年生以上及び大学院課程に在籍している者",
          "contact": "nan",
          "ID": "photo29"
      }
  ],
  "H4PP6P4": [
      {
          "name": "IAESTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/iaeste",
          "outline": "IAESTEは、理工学系学生のための国際インターンシップ（最短8 週間～最長52 週間・海外企業又は海外の大学での現場研修）を仲介している国際非政府団体。広い国際的視野を有するエンジニアを養成することを目的として、これまでに国内外で約37 万人の学生を相互交換している。",
          "period": "8週間～52週間（夏期2～3ヶ月が一般的）",
          "schedule": "派遣前年度の１０月中旬",
          "cost": "渡航費、海外旅行保険、ビザ申請費用等は自己負担。派遣先機関が給与支給、滞在先を確保する。",
          "application_grade": "研修開始時に、日本の大学の学士課程3年生以上及び大学院課程に在籍している者",
          "contact": "nan",
          "ID": "photo29"
      },
      {
          "name": "ヴルカヌス・イン・ヨーロッパ",
          "url": "https://www.titech.ac.jp/students/abroad/programs/eu-japan",
          "outline": "日本の理工系学生を対象に 1 年間 EU 加盟国で研修を行うプログラムです。語学研修と企業研修（インターンシップ）で構成されており、語学研修では、企業研修で使用する言語の習得をめざし、企業研修に臨みます。",
          "period": "1年間（4月-翌3月まで）",
          "schedule": "前年度9月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "応募時点で、日本の大学において理工学系の学士課程3～4年生",
          "contact": "nan",
          "ID": "photo30"
      }
  ],
  "H4PP7P1": [],
  "H4PP7P2": [],
  "H4PP7P3": [],
  "H4PP7P4": [],
  "H4PP8P1": [],
  "H4PP8P2": [
      {
          "name": "Science Tokyo-AYSEAS",
          "url": "https://www.titech.ac.jp/students/abroad/programs/ayseas",
          "outline": "※医歯学系学生応募可能 東南アジアに赴き、現地・近隣国の大学生と共に企業・政府機関・大学などを訪問する。参加学生は、科学者・技術者の卵として日本も含めたアジアの開発・発展における科学技術の役割というテーマの下、現地調査で得た知見に基づきディスカッションを行い、現地訪問最終日に各ディスカッショングループとしての結論を発表する。",
          "period": "9月の10日程度。事前学習あり",
          "schedule": "5月中旬頃",
          "cost": "旅費（航空券・ホテルなどを含め20~30万円程度）は原則自費。ただし、奨学金給付の可能性あり。",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo4"
      },
      {
          "name": "ASPIREリーグ",
          "url": "https://www.titech.ac.jp/international-cooperation/global/featured/aspire",
          "outline": "ASPIREリーグは、香港科技大学、韓国科学技術院、南洋理工大学、清華大学、本学のアジア理工系トップ5大学で構成されたコンソーシアム。毎年6 ～ 7月に議長校で開催されるフォーラムに合わせ、学生ワークショップを開催。特定のテーマに関連した講義や研究施設見学、グループワーク等の活動に参加し、最終日にグループ発表を行う。",
          "period": "7月上旬～中旬頃",
          "schedule": "4-5月",
          "cost": "20-30万",
          "application_grade": "大学院課程学生",
          "contact": "nan",
          "ID": "photo6"
      },
      {
          "name": "国立台湾科技大学２TOP-CDPEプログラム",
          "url": "nan",
          "outline": "国立台湾科技大学にて、現地の学生との混合チームにて、英語でプロジェクト制作に取り組む。",
          "period": "8月17日～8月31日（24年度）2週間程度",
          "schedule": "7月末頃",
          "cost": "本学からの奨学金支給の予定はないが、期間中の宿泊は台湾科技大学の寮が無償で提供される",
          "application_grade": "＊応募時に、工学院、物質理工学院、環境・社会理工学院に所属する学士課程2年生或いは3年生であること",
          "contact": "国際交流支援チーム（ko.intl@jim.titech.ac.jp)",
          "ID": "photo40"
      }
  ],
  "H4PP8P3": [],
  "H4PP8P4": [],
  "H4PP9P1": [],
  "H4PP9P2": [],
  "H4PP9P3": [],
  "H4PP9P4": [],
  "H4PP10P1": [],
  "H4PP10P2": [],
  "H4PP10P3": [],
  "H4PP10P4": [],
  "H4PP11P1": [],
  "H4PP11P2": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      }
  ],
  "H4PP11P3": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      }
  ],
  "H4PP11P4": [],
  "H4PP12P1": [],
  "H4PP12P2": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      }
  ],
  "H4PP12P3": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      }
  ],
  "H4PP12P4": [],
  "H4PP13P1": [],
  "H4PP13P2": [
      {
          "name": "アントレプレナーシップグローバル海外研修プログラム",
          "url": "http://www.ghrd.titech.ac.jp/course/program/overseas/study_abroad_program/",
          "outline": "世界トップレベルの大学での授業の聴講、学生交流、ラボ見学や、国際機関や現地企業の訪問を通じて、長期留学や海外でのキャリア形成に備える体験留学。",
          "period": "8～9月 2～3月",
          "schedule": "夏派遣：５月頃 春派遣：10月頃",
          "cost": "18～40万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo1"
      },
      {
          "name": "Science Tokyo-AYSEAS",
          "url": "https://www.titech.ac.jp/students/abroad/programs/ayseas",
          "outline": "※医歯学系学生応募可能 東南アジアに赴き、現地・近隣国の大学生と共に企業・政府機関・大学などを訪問する。参加学生は、科学者・技術者の卵として日本も含めたアジアの開発・発展における科学技術の役割というテーマの下、現地調査で得た知見に基づきディスカッションを行い、現地訪問最終日に各ディスカッショングループとしての結論を発表する。",
          "period": "9月の10日程度。事前学習あり",
          "schedule": "5月中旬頃",
          "cost": "旅費（航空券・ホテルなどを含め20~30万円程度）は原則自費。ただし、奨学金給付の可能性あり。",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo4"
      },
      {
          "name": "国立台湾科技大学２TOP-CDPEプログラム",
          "url": "nan",
          "outline": "国立台湾科技大学にて、現地の学生との混合チームにて、英語でプロジェクト制作に取り組む。",
          "period": "8月17日～8月31日（24年度）2週間程度",
          "schedule": "7月末頃",
          "cost": "本学からの奨学金支給の予定はないが、期間中の宿泊は台湾科技大学の寮が無償で提供される",
          "application_grade": "＊応募時に、工学院、物質理工学院、環境・社会理工学院に所属する学士課程2年生或いは3年生であること",
          "contact": "国際交流支援チーム（ko.intl@jim.titech.ac.jp)",
          "ID": "photo40"
      }
  ],
  "H4PP13P3": [],
  "H4PP13P4": [],
  "H4PP14P1": [],
  "H4PP14P2": [
      {
          "name": "Science Tokyo-AYSEAS",
          "url": "https://www.titech.ac.jp/students/abroad/programs/ayseas",
          "outline": "※医歯学系学生応募可能 東南アジアに赴き、現地・近隣国の大学生と共に企業・政府機関・大学などを訪問する。参加学生は、科学者・技術者の卵として日本も含めたアジアの開発・発展における科学技術の役割というテーマの下、現地調査で得た知見に基づきディスカッションを行い、現地訪問最終日に各ディスカッショングループとしての結論を発表する。",
          "period": "9月の10日程度。事前学習あり",
          "schedule": "5月中旬頃",
          "cost": "旅費（航空券・ホテルなどを含め20~30万円程度）は原則自費。ただし、奨学金給付の可能性あり。",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo4"
      },
      {
          "name": "ASPIREリーグ",
          "url": "https://www.titech.ac.jp/international-cooperation/global/featured/aspire",
          "outline": "ASPIREリーグは、香港科技大学、韓国科学技術院、南洋理工大学、清華大学、本学のアジア理工系トップ5大学で構成されたコンソーシアム。毎年6 ～ 7月に議長校で開催されるフォーラムに合わせ、学生ワークショップを開催。特定のテーマに関連した講義や研究施設見学、グループワーク等の活動に参加し、最終日にグループ発表を行う。",
          "period": "7月上旬～中旬頃",
          "schedule": "4-5月",
          "cost": "20-30万",
          "application_grade": "大学院課程学生",
          "contact": "nan",
          "ID": "photo6"
      }
  ],
  "H4PP14P3": [],
  "H4PP14P4": [],
  "H4PP15P1": [],
  "H4PP15P2": [],
  "H4PP15P3": [],
  "H4PP15P4": [],
  "H4PP16P1": [],
  "H4PP16P2": [],
  "H4PP16P3": [],
  "H4PP16P4": [
      {
          "name": "ポンゼショセとのデュアルディグリープログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/t-enpc-dd",
          "outline": "フランス L'École des Ponts ParisTechとの部局間協定に基づいた学習を修了し、最短3年間で双方の大学からそれぞれ修士号を取得する。",
          "period": "3年間",
          "schedule": "6月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院所属の修士課程学生",
          "contact": "nan",
          "ID": "photo26"
      },
      {
          "name": "東京科学大学・韓国科学技術院 大学院ダブルディグリープログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/t-kaist-dd",
          "outline": "韓国科学技術院（KAIST）との部局間協定に基づいた学習を修了し、標準2.5年間でKAISTからMaster of Science・本学から修士（工学）の学位を取得する",
          "period": "2.5年",
          "schedule": "4月・10月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "工学院機械系・システム制御系に在籍中の修士課程学生もしくは進学予定の学部４年生",
          "contact": "nan",
          "ID": "photo27"
      },
      {
          "name": "台湾国立陽明交通大学とのダブルディグリープログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/t-nctu-dd",
          "outline": "台湾国立陽明交通大学との協定に基づいた学習を修了し、最短2年間で双方の大学からそれぞれ修士号を取得する。",
          "period": "台湾国立陽明交通大学での滞在期間は最短1年間",
          "schedule": "3月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "工学院電気電子系に進学予定の本学学士課程4年生 物質理工学院修士課程に進学予定の本学学士課程4年生",
          "contact": "nan",
          "ID": "photo28"
      },
      {
          "name": "東京科学大学•清華大学大学院合同プログラム",
          "url": "http://www.ipo.titech.ac.jp/tsinghua/",
          "outline": "中国の清華大学と本学の双方に修士課程学生として在籍し、両大学の教員の指導を受けながら研究を行い、両大学の修士号取得を目指すダブルディグリープログラム。 修了に要する標準期間は本学で２年６ヵ月、清華大学で２年間。（清華大学での滞在期間１年間）",
          "period": "2年6ヶ月",
          "schedule": "6月",
          "cost": "70-200万円",
          "application_grade": "学士の学位を有していること",
          "contact": "nan",
          "ID": "photo25"
      }
  ],
  "H5Style1P1": [],
  "H5Style1P2": [
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      }
  ],
  "H5Style1P3": [
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "TAIST-Science Tokyo Student Exchange Program in Thailand",
          "url": "https://www.titech.ac.jp/public-relations/global/featured/taist",
          "outline": "Science Tokyo、タイ国立科学技術開発庁、タイの5大学、タイ学術研究会議による国際連携大学院TAIST（タイスト）を活用した学生交流プログラム。 自動車・先進交通工学 をテーマとしたA2TE、AIとIoTをテーマとしたAIoT、持続可能なエネルギー・資源工学 をテーマとしたSEREのいずれかのプログラムに参加し、バンコク郊外のタイランドサイエンスパークにて関連分野の研究室でインターンシップやTAIST講義の受講に取り組む。",
          "period": "5月から3月",
          "schedule": "プログラムごとに設定",
          "cost": "20-25万円",
          "application_grade": "プログラムごとに設定",
          "contact": "nan",
          "ID": "photo11"
      },
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      }
  ],
  "H5Style1P4": [
      {
          "name": "派遣交換留学プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/tuitionwaiver",
          "outline": "本学理学系と授業料等不徴収協定を結んでいる海外の大学（協定校）が1学期～1 年間学生を交換する留学プログラムです。現地の大学では自身の専攻に応じた授業履修・研究、課外活動を通じて様々な経験ができます。本プログラムに参加する学生は将来のキャリアを見据えて計画立案から実行、振り返りまでを丁寧に行うことで、グローバルに活躍できる人材になることを目指します。",
          "period": "秋出発：7月～12月 春出発：1月～6月 （1学期以上1年以内）",
          "schedule": "留学開始前年度から開始 秋出発：9月12月4月 春出発：5月6月",
          "cost": "50-200万ほど（地域差あり）",
          "application_grade": "学士2年後期～博士",
          "contact": "nan",
          "ID": "photo5"
      },
      {
          "name": "東京科学大学•清華大学大学院合同プログラム",
          "url": "http://www.ipo.titech.ac.jp/tsinghua/",
          "outline": "中国の清華大学と本学の双方に修士課程学生として在籍し、両大学の教員の指導を受けながら研究を行い、両大学の修士号取得を目指すダブルディグリープログラム。 修了に要する標準期間は本学で２年６ヵ月、清華大学で２年間。（清華大学での滞在期間１年間）",
          "period": "2年6ヶ月",
          "schedule": "6月",
          "cost": "70-200万円",
          "application_grade": "学士の学位を有していること",
          "contact": "nan",
          "ID": "photo25"
      }
  ],
  "H5Style2P1": [],
  "H5Style2P2": [],
  "H5Style2P3": [
      {
          "name": "インペリアルカレッジロンドンとの研究留学プログラム（IROP)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/irop",
          "outline": "インペリアル・カレッジ・ロンドンの夏休み時期にインペリアルの研究室に滞在し、2か月間にわたって受入教員の元で研究を行う。",
          "period": "7～8月の8週間",
          "schedule": "45627",
          "cost": "90万円",
          "application_grade": "本学正規課程の学士課程3年生以上及び修士課程学生",
          "contact": "nan",
          "ID": "photo19"
      },
      {
          "name": "キャンパスアジアプラス",
          "url": "http://www.ipo.titech.ac.jp/campusasia/japanese/dispatch/",
          "outline": "韓国科学技術院 [KAIST]（韓国）、清華大学（中国）、南洋理工大学（シンガポール）との共同運営プログラム。派遣先大学では、研究室に所属し研究活動を行うほか、授業履修も可能。サマースクールも行っている。最先端科学技術における専門性を強みとしながら、異分野の専門家たちと協働して知的成果を生み出せる人材育成をめざす。",
          "period": "7月～9月、8or9月～12or1月、1月～5月",
          "schedule": "各大学の募集要項参照",
          "cost": "10万円以内",
          "application_grade": "学士課程3年生以上及び大学院課程学生",
          "contact": "nan",
          "ID": "photo18"
      }
  ],
  "H5Style2P4": [
      {
          "name": "派遣交換留学プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/tuitionwaiver",
          "outline": "本学理学系と授業料等不徴収協定を結んでいる海外の大学（協定校）が1学期～1 年間学生を交換する留学プログラムです。現地の大学では自身の専攻に応じた授業履修・研究、課外活動を通じて様々な経験ができます。本プログラムに参加する学生は将来のキャリアを見据えて計画立案から実行、振り返りまでを丁寧に行うことで、グローバルに活躍できる人材になることを目指します。",
          "period": "秋出発：7月～12月 春出発：1月～6月 （1学期以上1年以内）",
          "schedule": "留学開始前年度から開始 秋出発：9月12月4月 春出発：5月6月",
          "cost": "50-200万ほど（地域差あり）",
          "application_grade": "学士2年後期～博士",
          "contact": "nan",
          "ID": "photo5"
      },
      {
          "name": "SERP",
          "url": "https://www.titech.ac.jp/students/abroad/programs/serp",
          "outline": "工学院、物質理工学院、環境・社会理工学院がSERP協定を結んでいる大学の工学系研究室へ、本学に在籍したまま３ヶ月程度、研究留学する部局間協定に基づくプログラム。 本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "70-120万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo20"
      },
      {
          "name": "AOTULE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/aotule",
          "outline": "工学院、物質理工学院、環境・社会理工学院（工系3学院）がAOTULE協定を結んでいる大学の工学系研究室へ、本学に在籍したまま3ヶ月程度、研究留学する部局間協定に基づくプログラム。本学に授業料を支払うことで、留学先の授業料が免除になる。留学先の大学では、研究室に所属し研究活動を行う。",
          "period": "6～11月 12～5月",
          "schedule": "12月締切 6月締切",
          "cost": "50-80万円",
          "application_grade": "工学院、物質理工学院、環境・社会理工学院に所属する学士課程最終学年の学生及び大学院課程学生",
          "contact": "nan",
          "ID": "photo21"
      },
      {
          "name": "インペリアルカレッジロンドンとの研究留学プログラム（IROP)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/irop",
          "outline": "インペリアル・カレッジ・ロンドンの夏休み時期にインペリアルの研究室に滞在し、2か月間にわたって受入教員の元で研究を行う。",
          "period": "7～8月の8週間",
          "schedule": "45627",
          "cost": "90万円",
          "application_grade": "本学正規課程の学士課程3年生以上及び修士課程学生",
          "contact": "nan",
          "ID": "photo19"
      }
  ],
  "H5Style3P1": [],
  "H5Style3P2": [
      {
          "name": "防災工学インターナショナルインターンシップ",
          "url": "https://www.titech.ac.jp/students/abroad/programs/earthquake-engineering",
          "outline": "国際大学院プログラム「レジリエントな都市更新に貢献する環境デザイナー育成プログラム」やこれに連動する「環境デザイン特別専門学修プログラム」で推奨する海外インターンシップで、実際に海外に赴き、現地でのカウンターパートの大学教員の指導のもと、現地学生と協働作業で、都市防災を対象とした調査・研究・資料収集・レポート作成並びに発表を行う。",
          "period": "9月",
          "schedule": "5月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "大学院課程学生",
          "contact": "nan",
          "ID": "photo12"
      }
  ],
  "H5Style3P3": [
      {
          "name": "IAESTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/iaeste",
          "outline": "IAESTEは、理工学系学生のための国際インターンシップ（最短8 週間～最長52 週間・海外企業又は海外の大学での現場研修）を仲介している国際非政府団体。広い国際的視野を有するエンジニアを養成することを目的として、これまでに国内外で約37 万人の学生を相互交換している。",
          "period": "8週間～52週間（夏期2～3ヶ月が一般的）",
          "schedule": "派遣前年度の１０月中旬",
          "cost": "渡航費、海外旅行保険、ビザ申請費用等は自己負担。派遣先機関が給与支給、滞在先を確保する。",
          "application_grade": "研修開始時に、日本の大学の学士課程3年生以上及び大学院課程に在籍している者",
          "contact": "nan",
          "ID": "photo29"
      },
      {
          "name": "NAKATANI RIES",
          "url": "https://www.titech.ac.jp/students/abroad/programs/nakataniries",
          "outline": "NAKATANI RIES 国際学生交流プログラムは、中谷財団の支援のもと、学部学生が海外の大学の研究室で研究を体験できるユニークな夏季リサーチインターンシッププログラムです。",
          "period": "8月-9月",
          "schedule": "2月",
          "cost": "ほぼ自己負担なし",
          "application_grade": "応募時点で学士課程1年生～3年生の者",
          "contact": "nan",
          "ID": "photo31"
      },
      {
          "name": "TAIST-Science Tokyo Student Exchange Program in Thailand",
          "url": "https://www.titech.ac.jp/public-relations/global/featured/taist",
          "outline": "Science Tokyo、タイ国立科学技術開発庁、タイの5大学、タイ学術研究会議による国際連携大学院TAIST（タイスト）を活用した学生交流プログラム。 自動車・先進交通工学 をテーマとしたA2TE、AIとIoTをテーマとしたAIoT、持続可能なエネルギー・資源工学 をテーマとしたSEREのいずれかのプログラムに参加し、バンコク郊外のタイランドサイエンスパークにて関連分野の研究室でインターンシップやTAIST講義の受講に取り組む。",
          "period": "5月から3月",
          "schedule": "プログラムごとに設定",
          "cost": "20-25万円",
          "application_grade": "プログラムごとに設定",
          "contact": "nan",
          "ID": "photo11"
      },
      {
          "name": "インペリアルカレッジロンドンとの研究留学プログラム（IROP)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/irop",
          "outline": "インペリアル・カレッジ・ロンドンの夏休み時期にインペリアルの研究室に滞在し、2か月間にわたって受入教員の元で研究を行う。",
          "period": "7～8月の8週間",
          "schedule": "45627",
          "cost": "90万円",
          "application_grade": "本学正規課程の学士課程3年生以上及び修士課程学生",
          "contact": "nan",
          "ID": "photo19"
      }
  ],
  "H5Style3P4": [
      {
          "name": "IAESTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/iaeste",
          "outline": "IAESTEは、理工学系学生のための国際インターンシップ（最短8 週間～最長52 週間・海外企業又は海外の大学での現場研修）を仲介している国際非政府団体。広い国際的視野を有するエンジニアを養成することを目的として、これまでに国内外で約37 万人の学生を相互交換している。",
          "period": "8週間～52週間（夏期2～3ヶ月が一般的）",
          "schedule": "派遣前年度の１０月中旬",
          "cost": "渡航費、海外旅行保険、ビザ申請費用等は自己負担。派遣先機関が給与支給、滞在先を確保する。",
          "application_grade": "研修開始時に、日本の大学の学士課程3年生以上及び大学院課程に在籍している者",
          "contact": "nan",
          "ID": "photo29"
      },
      {
          "name": "ヴルカヌス・イン・ヨーロッパ",
          "url": "https://www.titech.ac.jp/students/abroad/programs/eu-japan",
          "outline": "日本の理工系学生を対象に 1 年間 EU 加盟国で研修を行うプログラムです。語学研修と企業研修（インターンシップ）で構成されており、語学研修では、企業研修で使用する言語の習得をめざし、企業研修に臨みます。",
          "period": "1年間（4月-翌3月まで）",
          "schedule": "前年度9月",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "応募時点で、日本の大学において理工学系の学士課程3～4年生",
          "contact": "nan",
          "ID": "photo30"
      },
      {
          "name": "派遣交換留学プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/tuitionwaiver",
          "outline": "本学理学系と授業料等不徴収協定を結んでいる海外の大学（協定校）が1学期～1 年間学生を交換する留学プログラムです。現地の大学では自身の専攻に応じた授業履修・研究、課外活動を通じて様々な経験ができます。本プログラムに参加する学生は将来のキャリアを見据えて計画立案から実行、振り返りまでを丁寧に行うことで、グローバルに活躍できる人材になることを目指します。",
          "period": "秋出発：7月～12月 春出発：1月～6月 （1学期以上1年以内）",
          "schedule": "留学開始前年度から開始 秋出発：9月12月4月 春出発：5月6月",
          "cost": "50-200万ほど（地域差あり）",
          "application_grade": "学士2年後期～博士",
          "contact": "nan",
          "ID": "photo5"
      },
      {
          "name": "物質理工学院学生交流プログラム",
          "url": "https://www.titech.ac.jp/students/abroad/programs/school03",
          "outline": "物質理工学院で交流協定を結んでいる大学・研究機関への派遣・留学",
          "period": "3か月～",
          "schedule": "4月・11月",
          "cost": "70-120万円",
          "application_grade": "修士課程以上",
          "contact": "nan",
          "ID": "photo23"
      }
  ],
  "H5Style4P1": [],
  "H5Style4P2": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      }
  ],
  "H5Style4P3": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      }
  ],
  "H5Style4P4": [],
  "H5Style5P1": [
      {
          "name": "ASPIREリーグ",
          "url": "https://www.titech.ac.jp/international-cooperation/global/featured/aspire",
          "outline": "ASPIREリーグは、香港科技大学、韓国科学技術院、南洋理工大学、清華大学、本学のアジア理工系トップ5大学で構成されたコンソーシアム。毎年6 ～ 7月に議長校で開催されるフォーラムに合わせ、学生ワークショップを開催。特定のテーマに関連した講義や研究施設見学、グループワーク等の活動に参加し、最終日にグループ発表を行う。",
          "period": "7月上旬～中旬頃",
          "schedule": "4-5月",
          "cost": "20-30万",
          "application_grade": "大学院課程学生",
          "contact": "nan",
          "ID": "photo6"
      },
      {
          "name": "インペリアル・カレッジ・ロンドンとの博士後期課程学生交流プログラム（GFP/インペリアル)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/gfp-imperial",
          "outline": "インペリアル・カレッジ・ロンドンの博士後期課程学生と寝食を共にしながら、専門分野の垣根を越えて世界規模の課題、持続可能な開発目標SDGsについて考える約1週間の合宿型国際交流プログラム。ロンドン又は東京において毎年交代で開催される。2025年は9月に東京で開催。本プログラム終了後、希望者はインペリアル・カレッジ・ロンドンにて1ヶ月から3ヶ月間の研究室滞在を行うことができる。",
          "period": "未定",
          "schedule": "未定",
          "cost": "詳細はプログラム担当に確認",
          "application_grade": "博士課程学生",
          "contact": "nan",
          "ID": "photo8"
      }
  ],
  "H5Style5P2": [
      {
          "name": "Science Tokyo-AYSEAS",
          "url": "https://www.titech.ac.jp/students/abroad/programs/ayseas",
          "outline": "※医歯学系学生応募可能 東南アジアに赴き、現地・近隣国の大学生と共に企業・政府機関・大学などを訪問する。参加学生は、科学者・技術者の卵として日本も含めたアジアの開発・発展における科学技術の役割というテーマの下、現地調査で得た知見に基づきディスカッションを行い、現地訪問最終日に各ディスカッショングループとしての結論を発表する。",
          "period": "9月の10日程度。事前学習あり",
          "schedule": "5月中旬頃",
          "cost": "旅費（航空券・ホテルなどを含め20~30万円程度）は原則自費。ただし、奨学金給付の可能性あり。",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo4"
      },
      {
          "name": "国際親善ロボットコンテスト",
          "url": "https://www.titech.ac.jp/students/abroad/programs/idc",
          "outline": "毎年異なるコンテストルールが初日に与えられ、国際混成チームを構成し、チーム毎に2週間でロボットを設計・製作して最終日にコンテストを行う。言葉の壁や異なる国の文化や習慣を超えて、協調してものを作る体験を通して国際的もの作りの難しさや楽しさを学ぶ。",
          "period": "7月か8月",
          "schedule": "毎年4月",
          "cost": "基本無料",
          "application_grade": "nan",
          "contact": "nan",
          "ID": "photo13"
      },
      {
          "name": "アントレプレナーシップグローバル海外研修プログラム",
          "url": "http://www.ghrd.titech.ac.jp/course/program/overseas/study_abroad_program/",
          "outline": "世界トップレベルの大学での授業の聴講、学生交流、ラボ見学や、国際機関や現地企業の訪問を通じて、長期留学や海外でのキャリア形成に備える体験留学。",
          "period": "8～9月 2～3月",
          "schedule": "夏派遣：５月頃 春派遣：10月頃",
          "cost": "18～40万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo1"
      },
      {
          "name": "国立台湾科技大学２TOP-CDPEプログラム",
          "url": "nan",
          "outline": "国立台湾科技大学にて、現地の学生との混合チームにて、英語でプロジェクト制作に取り組む。",
          "period": "8月17日～8月31日（24年度）2週間程度",
          "schedule": "7月末頃",
          "cost": "本学からの奨学金支給の予定はないが、期間中の宿泊は台湾科技大学の寮が無償で提供される",
          "application_grade": "＊応募時に、工学院、物質理工学院、環境・社会理工学院に所属する学士課程2年生或いは3年生であること",
          "contact": "国際交流支援チーム（ko.intl@jim.titech.ac.jp)",
          "ID": "photo40"
      }
  ],
  "H5Style5P3": [],
  "H5Style5P4": [],
  "H5Style6P1": [],
  "H5Style6P2": [
      {
          "name": "アントレプレナーシップグローバル海外研修プログラム",
          "url": "http://www.ghrd.titech.ac.jp/course/program/overseas/study_abroad_program/",
          "outline": "世界トップレベルの大学での授業の聴講、学生交流、ラボ見学や、国際機関や現地企業の訪問を通じて、長期留学や海外でのキャリア形成に備える体験留学。",
          "period": "8～9月 2～3月",
          "schedule": "夏派遣：５月頃 春派遣：10月頃",
          "cost": "18～40万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo1"
      },
      {
          "name": "Science Tokyo-AYSEAS",
          "url": "https://www.titech.ac.jp/students/abroad/programs/ayseas",
          "outline": "※医歯学系学生応募可能 東南アジアに赴き、現地・近隣国の大学生と共に企業・政府機関・大学などを訪問する。参加学生は、科学者・技術者の卵として日本も含めたアジアの開発・発展における科学技術の役割というテーマの下、現地調査で得た知見に基づきディスカッションを行い、現地訪問最終日に各ディスカッショングループとしての結論を発表する。",
          "period": "9月の10日程度。事前学習あり",
          "schedule": "5月中旬頃",
          "cost": "旅費（航空券・ホテルなどを含め20~30万円程度）は原則自費。ただし、奨学金給付の可能性あり。",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo4"
      }
  ],
  "H5Style6P3": [],
  "H5Style6P4": [],
  "H5Style7P1": [
      {
          "name": "ASPIREリーグ",
          "url": "https://www.titech.ac.jp/international-cooperation/global/featured/aspire",
          "outline": "ASPIREリーグは、香港科技大学、韓国科学技術院、南洋理工大学、清華大学、本学のアジア理工系トップ5大学で構成されたコンソーシアム。毎年6 ～ 7月に議長校で開催されるフォーラムに合わせ、学生ワークショップを開催。特定のテーマに関連した講義や研究施設見学、グループワーク等の活動に参加し、最終日にグループ発表を行う。",
          "period": "7月上旬～中旬頃",
          "schedule": "4-5月",
          "cost": "20-30万",
          "application_grade": "大学院課程学生",
          "contact": "nan",
          "ID": "photo6"
      }
  ],
  "H5Style7P2": [
      {
          "name": "Science Tokyo-AYSEAS",
          "url": "https://www.titech.ac.jp/students/abroad/programs/ayseas",
          "outline": "※医歯学系学生応募可能 東南アジアに赴き、現地・近隣国の大学生と共に企業・政府機関・大学などを訪問する。参加学生は、科学者・技術者の卵として日本も含めたアジアの開発・発展における科学技術の役割というテーマの下、現地調査で得た知見に基づきディスカッションを行い、現地訪問最終日に各ディスカッショングループとしての結論を発表する。",
          "period": "9月の10日程度。事前学習あり",
          "schedule": "5月中旬頃",
          "cost": "旅費（航空券・ホテルなどを含め20~30万円程度）は原則自費。ただし、奨学金給付の可能性あり。",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo4"
      },
      {
          "name": "アントレプレナーシップグローバル海外研修プログラム",
          "url": "http://www.ghrd.titech.ac.jp/course/program/overseas/study_abroad_program/",
          "outline": "世界トップレベルの大学での授業の聴講、学生交流、ラボ見学や、国際機関や現地企業の訪問を通じて、長期留学や海外でのキャリア形成に備える体験留学。",
          "period": "8～9月 2～3月",
          "schedule": "夏派遣：５月頃 春派遣：10月頃",
          "cost": "18～40万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo1"
      },
      {
          "name": "国際親善ロボットコンテスト",
          "url": "https://www.titech.ac.jp/students/abroad/programs/idc",
          "outline": "毎年異なるコンテストルールが初日に与えられ、国際混成チームを構成し、チーム毎に2週間でロボットを設計・製作して最終日にコンテストを行う。言葉の壁や異なる国の文化や習慣を超えて、協調してものを作る体験を通して国際的もの作りの難しさや楽しさを学ぶ。",
          "period": "7月か8月",
          "schedule": "毎年4月",
          "cost": "基本無料",
          "application_grade": "nan",
          "contact": "nan",
          "ID": "photo13"
      },
      {
          "name": "国立台湾科技大学２TOP-CDPEプログラム",
          "url": "nan",
          "outline": "国立台湾科技大学にて、現地の学生との混合チームにて、英語でプロジェクト制作に取り組む。",
          "period": "8月17日～8月31日（24年度）2週間程度",
          "schedule": "7月末頃",
          "cost": "本学からの奨学金支給の予定はないが、期間中の宿泊は台湾科技大学の寮が無償で提供される",
          "application_grade": "＊応募時に、工学院、物質理工学院、環境・社会理工学院に所属する学士課程2年生或いは3年生であること",
          "contact": "国際交流支援チーム（ko.intl@jim.titech.ac.jp)",
          "ID": "photo40"
      }
  ],
  "H5Style7P3": [
      {
          "name": "TASTE",
          "url": "https://www.titech.ac.jp/students/abroad/programs/taste-en-sm",
          "outline": "※医歯学系学生応募可能 対象の大学で実施する短期語学研修プログラムに参加する者に対して申込の手続き支援と単位付与、経済支援を行います。英語と第二外国語が対象です。",
          "period": "6～9月 2～3月",
          "schedule": "夏派遣：3～7月 春派遣：12～1月",
          "cost": "50万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo2"
      },
      {
          "name": "協定校シーズンプログラム",
          "url": "https://www.titech.ac.jp/students/abroad/pdf/7b5deb56bc1517b5822fbcdeab89da27-4.pdf",
          "outline": "※医歯学系学生応募可能 海外協定校のサマースクールやウィンタースクールに参加し、世界各国の学生と共に主に英語で専門科目の授業受講や研究を行う。参加者には、単位付与や手続き支援が用意されている。協定校への申し込みは各自で行う。",
          "period": "5～9月 1月",
          "schedule": "2月～7月、11月～12月",
          "cost": "40万円～100万円",
          "application_grade": "学士課程学生・修士課程学生",
          "contact": "nan",
          "ID": "photo3"
      },
      {
          "name": "インペリアルカレッジロンドンとの研究留学プログラム（IROP)",
          "url": "https://www.titech.ac.jp/students/abroad/programs/irop",
          "outline": "インペリアル・カレッジ・ロンドンの夏休み時期にインペリアルの研究室に滞在し、2か月間にわたって受入教員の元で研究を行う。",
          "period": "7～8月の8週間",
          "schedule": "45627",
          "cost": "90万円",
          "application_grade": "本学正規課程の学士課程3年生以上及び修士課程学生",
          "contact": "nan",
          "ID": "photo19"
      }
  ],
  "H5Style7P4": [],
  "H6E1": [
      {
          "name": "留学コンシェルジュ",
          "url": "https://www.titech.ac.jp/international-student-exchange/students/abroad/information-consultation",
          "outline": "自身が希望する留学プログラムが見つからない？留学コンシェルジュ、留学促進学生団体FLAPに相談してください。",
          "period": "随時",
          "schedule": "随時",
          "cost": "無料",
          "application_grade": "在学生のみ",
          "contact": "nan",
          "ID": "photo39"
      },
      {
          "name": "FLAP",
          "url": "https://flaptokyotech.wordpress.com/",
          "outline": "東京科学大学生にとって『留学』が当たり前の選択肢に」をビジョンに活動をしている学生団体。 留学経験者との相談サービスである「ふらっとFLAP」をはじめ、留学に関するイベントの運営や情報発信など、東⼯⼤生の留学をサポートする活動をおこなっている。",
          "period": "随時",
          "schedule": "随時",
          "cost": "企画ごとに設定",
          "application_grade": "在学生のみ",
          "contact": "nan",
          "ID": "photo37"
      }
  ],
  "H6E2": [
      {
          "name": "SAGE",
          "url": "https://www.titech.ac.jp/public-relations/global/stories/sage-2016",
          "outline": "SAGEでは「気軽に参加できる国際交流イベント」をコンセプトに、学内で留学生同士の交流やと留学生と日本人学生の交流を促すためのイベントの企画・運営を行っています。",
          "period": "随時",
          "schedule": "随時",
          "cost": "企画ごとに設定",
          "application_grade": "在学生のみ",
          "contact": "nan",
          "ID": "photo35"
      },
      {
          "name": "S-TISA",
          "url": "https://www.s-tisa.org/",
          "outline": "TISAでは「留学生と日本人学生を結びつけるためのイベント」をコンセプトに、学内で留学生同士の交流やと留学生と日本人学生の交流を促すためのイベントの企画・運営を行っています。",
          "period": "随時",
          "schedule": "随時",
          "cost": "企画ごとに設定",
          "application_grade": "在学生のみ",
          "contact": "nan",
          "ID": "photo36"
      },
      {
          "name": "IAESTE 学生団体",
          "url": "https://tlsc.iaeste.or.jp/",
          "outline": "IAESTEの国際インターンシッププログラムの広報活動と、日本へ派遣される各国インターン生のサポートや交流。インカレサークルで本学だけでなく、他大学（東京理科大や東京農工大など）の学生とも活動を行っている。",
          "period": "随時",
          "schedule": "随時",
          "cost": "企画ごとに設定",
          "application_grade": "大学生であること",
          "contact": "nan",
          "ID": "photo41"
      }
  ],
  "H6E3": [
      {
          "name": "キャリア相談",
          "url": "https://www.titech.ac.jp/student-support/students/career/counseling",
          "outline": "キャリアについて、気軽に何でも相談してください。みなさんの疑問・質問にお答えします。エントリーシートの書き方は？自分の専門分野を活かした職種は？研究者として活躍したいときは？ ちょっとした疑問にも、どうしていいかわからないという相談にも、みなさんのニーズに合わせて対応します。",
          "period": "随時",
          "schedule": "随時",
          "cost": "無料",
          "application_grade": "在学生のみ",
          "contact": "nan",
          "ID": "photo38"
      }
  ],
  "H6E4": [
      {
          "name": "ENGLISH CAFÉ",
          "url": "https://www.fl.ila.titech.ac.jp/cafe.html",
          "outline": "日本人学生と留学生が各自ランチを持ち寄り、自由に会話を楽しむ気軽な会です。英語を母国語とするILAの専任教員を進行役として、皆さんと楽しいひと時を過ごしましょう！",
          "period": "授業期間中",
          "schedule": "随時",
          "cost": "無料",
          "application_grade": "在学生",
          "contact": "nan",
          "ID": "photo33"
      },
      {
          "name": "多言語チャット",
          "url": "https://www.titech.ac.jp/student-support/students/extracurricular/jobs-campus/concierge-jr#InternationalExchangeTeam",
          "outline": "学修コンシェルジュJr.国際班のメンバーと 英語・韓国語・中国語・日本語で話してみませんか？ 外国語で交流してみましょう。",
          "period": "毎週金曜日12:50-13:20開催",
          "schedule": "随時",
          "cost": "無料",
          "application_grade": "在学生",
          "contact": "nan",
          "ID": "photo34"
      }
  ]
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("schooljudge.js DOM ready");
  // your logic here

  let maxHeight = 0;

  function getTextHeight(element, totalChars) {
    const fontSize = 16;
    const lineHeight = fontSize * 1.5; // 24px
    const charWidth = fontSize;        // 16px for full-width chars

    const containerWidth = element.offsetWidth;
    const charsPerLine = Math.floor(containerWidth / charWidth);
    const linesNeeded = Math.ceil(totalChars / charsPerLine);

    return linesNeeded * lineHeight;
  }

  // if there is nothing in the option that is chosen (this will not happen)
  if(obj[myParam].length == 0){
    var div = document.createElement('div');
    div.classList.add('col');

    // 新しいdiv要素を作成
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'mb-4', 'rounded-3', 'shadow-sm', 'h-100');
    cardDiv.style.maxHeight = 'auto';

    // 新しいdiv要素を作成
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body', 'text-center', 'd-flex', 'flex-column', 'justify-content-center');

    // 新しいa要素を作成
    var link = document.createElement('a');
    link.href = 'homepage.html';
    link.classList.add('w-100', 'text-center', 'd-flex', 'flex-column', 'justify-content-center', 'btn', 'btn-lg', 'btn-primary', 'h-100');
    link.setAttribute('type', 'button');
    link.style.fontSize = 'small';
    link.textContent = 'ホームに戻る';

    cardBodyDiv.appendChild(link);
    cardDiv.appendChild(cardBodyDiv);
    div.appendChild(cardDiv);
    document.body.appendChild(div);
  }
  else{
    var messageDiv = document.createElement("div");
    messageDiv.classList.add("message-div");
    messageDiv.textContent = "あなたにおすすめの留学は・・・"

    var backDiv = document.createElement("a");
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('param');
    const preParam = myParam[myParam.length-2];

    var hscrollElement = document.createElement("div");
    hscrollElement.classList.add("hscroll");

    var ulElement = document.createElement("ul");

    var schoolinfoDiv = document.createElement("div");
    schoolinfoDiv.id = "schoolinfo";

    ulElement.appendChild(schoolinfoDiv);

    var dotsContainerDiv = document.createElement("div");
    dotsContainerDiv.classList.add("dots-container");

    var arrowLeft = document.createElement("span");
    arrowLeft.classList.add("arrow", "left");

    var arrowRight = document.createElement("span");
    arrowRight.classList.add("arrow", "right");

    hscrollElement.appendChild(dotsContainerDiv);
    hscrollElement.appendChild(ulElement);
    hscrollElement.appendChild(arrowLeft);
    hscrollElement.appendChild(arrowRight);

    document.body.appendChild(messageDiv);

    document.body.appendChild(hscrollElement);

    const schoolinfo = document.getElementById('schoolinfo');
    for (let i = 0; i < obj[myParam].length; i++) {
        // 新しいli要素を作成

      var liElement = document.createElement("li");

      // div要素を作成してスタイルを設定
      var divElement = document.createElement("div");
      divElement.classList.add("container-fluid","text-center");
      divElement.style.position = "relative";

      // a要素を作成してhref属性を設定
      var aElement = document.createElement("a");
      if(obj[myParam][i].url != "nan"){
        aElement.href = obj[myParam][i].url;
      }

      // img要素を作成してsrc属性とスタイルを設定
      var imgElement = document.createElement("img");
      imgElement.src = "./image/" + obj[myParam][i].ID + ".png";

      // img要素をa要素の子要素に追加
      aElement.appendChild(imgElement);

      /*
      // テキストを表示するdiv要素を作成してスタイルを設定
      var textDiv = document.createElement("div");
      textDiv.style.position = "absolute";
      textDiv.style.top = "0";
      textDiv.style.left = "0";
      textDiv.style.width = "100%";
      textDiv.style.textAlign = "center";
      textDiv.style.backgroundColor = "rgba(255, 255, 255, 0.7)";

      textDiv.innerHTML = obj[myParam][i].name;
      */

      var nameElement = document.createElement("div");
      nameElement.classList.add("word-container");
      nameElement.classList.add("card")
      nameElement.innerHTML = "<プログラム名>"
      var nameContentElement = document.createElement("div");
      nameContentElement.classList.add("card-body")
      nameContentElement.classList.add("word-container");
      nameContentElement.innerHTML = obj[myParam][i].name;
      nameElement.appendChild(nameContentElement);


      var outlineElement = document.createElement("div");
      outlineElement.classList.add("word-container-program");
      outlineElement.classList.add("card")
      outlineElement.innerHTML = "<プログラムの概要>"
      var outlineContentElement = document.createElement("div");
      outlineContentElement.classList.add("card-body")
      outlineContentElement.classList.add("word-container");
      outlineContentElement.innerHTML = obj[myParam][i].outline
      outlineElement.appendChild(outlineContentElement);

      var periodElement = document.createElement("div");
      periodElement.classList.add("word-container");
      periodElement.classList.add("card");
      periodElement.innerHTML = "<実施時期>"
      var periodContentElement = document.createElement("div");
      periodContentElement.classList.add("card-body");
      periodContentElement.classList.add("word-container");
      periodContentElement.innerHTML = obj[myParam][i].period
      periodElement.appendChild(periodContentElement);


      var scheduleElement = document.createElement("div");
      scheduleElement.classList.add("word-container");
      scheduleElement.classList.add("card")
      scheduleElement.innerHTML = "<募集スケジュール>"
      var scheduleContentElement = document.createElement("div");
      scheduleContentElement.classList.add("card-body")
      scheduleContentElement.classList.add("word-container");
      scheduleContentElement.innerHTML = obj[myParam][i].schedule
      scheduleElement.appendChild(scheduleContentElement);


      var costElement = document.createElement("div");
      costElement.classList.add("word-container");
      costElement.classList.add("card")
      costElement.innerHTML = "<かかる費用>"
      var costContentElement = document.createElement("div");
      costContentElement.classList.add("card-body")
      costContentElement.classList.add("word-container");
      costContentElement.innerHTML = obj[myParam][i].cost
      costElement.appendChild(costContentElement);

      var gradeElement = document.createElement("div");
      gradeElement.classList.add("word-container-grade");
      gradeElement.classList.add("card")
      gradeElement.innerHTML = "<対象>"
      var gradeContentElement = document.createElement("div");
      gradeContentElement.classList.add("card-body")
      gradeContentElement.classList.add("word-container");
      gradeContentElement.innerHTML = obj[myParam][i].application_grade
      gradeElement.appendChild(gradeContentElement);

      var detailElement = document.createElement("div");
      detailElement.classList.add("word-container");
      detailElement.classList.add("card")
      detailElement.style.height = 100 + "px"
      var detailContentElement = document.createElement("div");
      var link = document.createElement('a');
      if(obj[myParam][i].url != "nan"){
        link.href = obj[myParam][i].url;
        link.classList.add('w-100', 'text-center', 'd-flex', 'flex-column', 'justify-content-center', 'btn', 'btn-lg', 'btn-primary', 'h-100');
        link.setAttribute('type', 'button');
        link.setAttribute('style', 'background-color: #e16112; border-color: #e16112; color: #ffffff;');
        link.textContent = '詳細を見る';
      }
      else{
        link.classList.add('w-100', 'text-center', 'd-flex', 'flex-column', 'justify-content-center', 'btn', 'btn-lg', 'btn-primary', 'h-100');
        link.setAttribute('type', 'button');
        link.setAttribute('style', 'background-color: #e16112; border-color: #e16112; color: #ffffff;');
        link.textContent = obj[myParam][i].contact;
      }
      detailContentElement.appendChild(link);
      detailElement.appendChild(detailContentElement);

      // テキストを表示するdiv要素をdiv要素の子要素に追加
      divElement.appendChild(aElement);
      //divElement.appendChild(textDiv);
      divElement.appendChild(nameElement);
      divElement.appendChild(outlineElement);
      divElement.appendChild(periodElement);
      divElement.appendChild(scheduleElement);
      divElement.appendChild(costElement);
      divElement.appendChild(gradeElement);
      divElement.appendChild(detailElement);

      // div要素をli要素の子要素に追加
      liElement.appendChild(divElement);

      // schoolinfo要素にli要素を追加
      document.getElementById("schoolinfo").appendChild(liElement);

      let height = getTextHeight(outlineContentElement, obj[myParam][i].outline.length);

      if (maxHeight < height) {
        maxHeight = height;
      }

    }

    // adjust the height for outline
    let programContainers = document.querySelectorAll(".word-container-program");
    for (let i = 0; i < programContainers.length; i++) {
      programContainers[i].style.height = (maxHeight + 120) + "px";
    }
  }

  const ul = document.querySelector('.hscroll ul');
  const dotsContainer = document.querySelector('.dots-container');
  const school = document.getElementById("schoolinfo");
  // Create dots for each image
  for (let i = 0; i < school.children.length; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.setAttribute('data-index', i);
      dotsContainer.appendChild(dot);

      if (i === 0) {
          dot.classList.add('active');
      }
  }

  // Event listener for dot clicks
  dotsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('dot')) {
          const index = parseInt(e.target.getAttribute('data-index'));
          ul.scrollLeft = school.children[index].offsetLeft;
      }
  });
  // Update active dot based on scroll position
  ul.addEventListener('scroll', () => {
      const scrollPosition = ul.scrollLeft;
      for (let i = 0; i < school.children.length; i++) {
          const child = school.children[i];
          if (scrollPosition >= child.offsetLeft && scrollPosition < child.offsetLeft + child.offsetWidth) {
              document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
              dotsContainer.children[i].classList.add('active');
              break;
          }
      }
  });
  document.querySelectorAll('.left').forEach(elm => {
      elm.onclick = function () {
          let ul = elm.parentNode.querySelector('ul');
          ul.scrollLeft -= ul.clientWidth;
      };
  });
  document.querySelectorAll('.right').forEach(elm => {
      elm.onclick = function () {
          let ul = elm.parentNode.querySelector('ul');
          ul.scrollLeft += ul.clientWidth;
      };
  });

  // Update active dot based on scroll position
  ul.addEventListener('scroll', () => {
      const scrollPosition = ul.scrollLeft;
      for (let i = 0; i < ul.children.length; i++) {
          const child = ul.children[i];
          if (scrollPosition >= child.offsetLeft && scrollPosition < child.offsetLeft + child.offsetWidth) {
              document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
              dotsContainer.children[i].classList.add('active');
              break;
          }
      }
  });
  document.querySelectorAll('.left').forEach(elm => {
      elm.onclick = function () {
          let ul = elm.parentNode.querySelector('ul');
          ul.scrollLeft -= ul.clientWidth;
      };
  });
  document.querySelectorAll('.right').forEach(elm => {
      elm.onclick = function () {
          let ul = elm.parentNode.querySelector('ul');
          ul.scrollLeft += ul.clientWidth;
      };
  });

  function getCurrentPageNumber() {
      const scrollPosition = ul.scrollLeft;
      const itemWidth = ul.children[0].offsetWidth; // Assuming all items have the same width
      const currentPage = Math.floor(scrollPosition / itemWidth) + 1; // Adding 1 to make it 1-indexed
      return currentPage;
  }
  function navigateToPage(pageNumber) {
      const itemWidth = ul.children[0].offsetWidth; // Assuming all items have the same width
      const targetScrollPosition = (pageNumber - 1) * itemWidth; // Calculate target scroll position
      // Set the scroll position directly without scrolling
      ul.scrollLeft = targetScrollPosition;

      // Update active dot based on the target page number
      document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
      dotsContainer.children[pageNumber - 1].classList.add('active');
  }

  var positionX;                  /* スクロール位置のX座標 */
  var positionY;                  /* スクロール位置のY座標 */
  var pageNumber;                 /* スライドのページ番号 */
  var STORAGE_KEY_X = "scrollX"; /* X座標のローカルストレージキー */
  var STORAGE_KEY_Y = "scrollY"; /* Y座標のローカルストレージキー */
  var STORAGE_KEY_PAGE = "pageNumber"; /* スライドのページ番号のローカルストレージキー */

  /*
  * checkOffset関数: 現在のスクロール量とページ番号をチェックしてストレージに保存
  */
  function checkOffset(){
      positionX = window.pageXOffset;
      positionY = window.pageYOffset;
      pageNumber = getCurrentPageNumber(); // Assume you have a function to get the current page number
      localStorage.setItem(STORAGE_KEY_X, 0);
      localStorage.setItem(STORAGE_KEY_Y, 0);
      localStorage.setItem(STORAGE_KEY_PAGE, pageNumber);
  }

  /*
  * 起動時の処理
  *
  *		ローカルストレージをチェックして前回のスクロール位置とページ番号に戻す
  */

  window.addEventListener("load", function(){
      // ストレージチェック
      positionX = localStorage.getItem(STORAGE_KEY_X);
      positionY = localStorage.getItem(STORAGE_KEY_Y);
      pageNumber = localStorage.getItem(STORAGE_KEY_PAGE);


      // 前回の保存データがあればスクロールする
      if(positionX !== null && positionY !== null && pageNumber !== null){
          scrollTo(positionX, positionY);
          // Assume you have a function to navigate to the saved page number
          if(pageNumber != "1"){
              navigateToPage("1");
          }
      }

      // スクロール時のイベント設定
      window.addEventListener("scroll", checkOffset, false);
  });

});