## Saboteur 矮人礦坑 線上多人連線遊戲網頁

<img src="https://user-images.githubusercontent.com/86958230/137316903-a981edda-9695-4378-ac1f-1ff59b8f9c22.png" width="30" height="40"/>  [矮人礦坑專案遊戲連結](https://game.dev.newideas.com.tw/)<br/>

## 專案緣起
矮人礦坑是一款我常常和朋友一起玩的桌遊，當時我在自學程式時，正在上Hahow吳哲宇老師的前端課程，以及六角學院的前端課程，秉持喜歡做中學的原則，我就選擇了這個遊戲作為我第一個練習Javascript的side Project，以此為動機，需要什麼能力就去補什麼能力，執行這個SIDE PROJECT時，我幾乎從頭到尾都十分的興奮。

## 開發流程 Development Process
1. Wireframe規劃、Mockup擬定視覺風格、與夥伴討論出最終的Prototype，並使用Notion共同協作，擬定整體功能及需求列表
2. 主要頁面使用HTML&CSS切版
3. 使用Javascript&JQuery實作邏輯開發，實際運用變數、流程判斷、函式、DOM 監聽，開發網頁遊戲功能
4. 使用Boostrap模板及元件增加介面選項及使用者體驗
5. 學習使用AJAX與後端伺服器溝通

## Mockup
![image](https://user-images.githubusercontent.com/86958230/136684561-77f6d073-8018-46a4-81eb-d2c026e8b4f6.png)

## 前端使用技術 Technologies Used
* HTML&CSS畫面切版及RWD響應式設計
* Boostrap模板及元件增加介面選項，如：輪播 (Carousel)、互動視窗 (Modal)等
* Javascript&JQuery進行頁面的效果切換及遊戲邏輯的撰寫
* AJAX與後端伺服器溝通，發出網路請求，串接API（學習中）

## 專案執行紀錄
1. 使用FIGMA作為介面設計工具，與後端夥伴討論出遊戲頁面的Prototype，確立介面與功能開發
2. 快速使用HTML&CSS進行畫面切版
3. 使用Javascript&JQuery做遊戲主要邏輯的撰寫
      *  新增卡牌旋轉功能
      *  新增卡牌點選時，顯示紅色提示框
      *  新增隨機顯示六張卡牌功能
      *  新增出一張牌後，再隨機補一張牌功能
      *  新增倒數計時器頁面效果
      *  新增隨機產生三張不重複的終點卡功能
      *  新增玩家若被封鎖時的狀態顯示效果
      *  新增人數計數器功能
      *  新增頁面效果，依指定人數顯示對應人數的矮人圖示
      *  新增一鍵複製連結功能
      *  新增輸入暱稱功能，自動記憶上次留存的暱稱，增加判斷邏輯，阻擋暱稱空白的例外狀況
      *  新增留言板
      *  新增特殊卡牌判斷，及特殊卡牌功能，如：地圖卡可以掀開一張終點卡偷看、封鎖卡可以暫停其中一位玩家遊戲...等
      *  新增遊戲聊天室功能
      *  優化聊天室使用體驗，使scrollbar永遠在底部
      *  新增卡牌位置判斷，判斷道路是否可以連接，使未能成功連接的卡牌不能放上牌面

4. 利用寫程式腦力激盪到疲乏之餘，使用Adobe Illustrator電繪遊戲主要畫面
5. 使用Boostrap模板及元件增加介面選項，如：互動視窗 (Modal)、手風琴 (Accordion)、輪播 (Carousel)等，增加網頁頁面豐富度及使用者體驗

## 遊戲畫面
- 遊戲首頁人數確認

![ezgif-3-1c51acc42425](https://user-images.githubusercontent.com/86958230/136682945-78aa1025-e32c-4240-ba74-d783fc4635b2.gif)
- 一鍵複製連結分享
 
![2](https://user-images.githubusercontent.com/86958230/136683570-d521652f-eca5-409d-82c4-e3926b33b4d9.gif)
- 邀請加入遊戲畫面

![3](https://user-images.githubusercontent.com/86958230/136683574-53ed1b2f-d859-41b5-9fe9-6f1b845837f5.gif)


- 房主直接開始遊戲

![4](https://user-images.githubusercontent.com/86958230/136683577-f9b2b475-d75d-4166-a775-55b1b2bad4a4.gif)
- 查看角色卡並確認

![5](https://user-images.githubusercontent.com/86958230/136683579-0830a333-03a2-4563-ac9f-be828c347c2c.gif)
- 放置卡牌開始遊戲

![6](https://user-images.githubusercontent.com/86958230/136683581-45b7ded9-8848-488a-bdf6-5af75b67c4f6.gif)



## 專案心得
這個專案歷時不短的時間才完成，前面一路在做中學時，一開始十分順利，猶記得我第一個做的功能是使用Javascript讓道路卡牌在牌面上旋轉，當時做出旋轉功能的興奮至今還記憶猶新。
後來開始功能多了起來，開始出現Error卻又找不到原因時，實在十分氣餒，更是曾花了老半天時間在找一個bug，結果最後發現是syntax error（囧），也曾經一度花了超過一週，還是開發不出卡牌判斷功能，當時也曾沮喪的懷疑自己是否沒有天份？不過好在程式這玩意兒不會背叛你，睡一覺醒來，頭腦清醒時又是一條好漢ＸＤ最後感謝自己有從頭到尾的堅持住，才能順利的完成這個有趣的專案。
