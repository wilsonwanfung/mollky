import React from 'react';
import './App.css';
import cuhkLogo from './assets/picture/cuhk.png';
import chungChiLogo from './assets/picture/chungchi.png';
import ndcLogo from './assets/picture/ndc.jpeg';


function App() {
  return (
    <div className="App">
      <header>
      <div className="logos">
          <img src={chungChiLogo} alt="Chung Chi College Logo" className="logo" />
      </div>
        <h1>木棋策略</h1>
        <div className="logos">
          <img src={ndcLogo} alt="Notre Dame College Logo" className="logo" />
        </div> 
        <author>
          <p >Created by Wilson Cheung</p>
        </author>
      </header>
      <main>
       
        <ul>
          <li><strong>準繩度是一切：</strong> 𣈴準才投擲！</li>
          <br />
          <li><strong>及早累積分數 :</strong> 盡可能在遊戲前期優先擊倒高分木柱（10-12分）。緊記要權衡風險和回報。</li>
          <br />
          <li><strong>防守性打法：</strong> 可以故意少擊倒一些木柱，避免給對手容易的機會。考慮給對手留下困難的木柱排列。</li>
          <br />
          <li><strong>睇分數做人 :</strong> 時刻關注自己和對手的分數。目標是準確達到50分而不超過</li>
          <br />
          <li><strong>絕殺技巧 :</strong> 在比賽最後階段，根據所需分數策略性地選擇目標木柱。接近50分時，考慮更安全的投擲以避免超分。</li>
          <br />
          <li><strong>適應性：</strong> 根據每次投擲後的木柱位置調整策略。</li>
          <br />
          <li><strong>找對手感：</strong> 嘗試不同的投擲方式（下手投、側手投等）。找到適合自己的一致投擲技巧。</li>
          <br />
          <li><strong>保持冷靜：</strong> 保持專注和冷靜，不要讓失誤或對手的成功影響你的表現。</li>
        </ul>
      </main>
      <br />
      <footer>
      <p >😁😁謹記這些大原則。希望NDC的同學享受木棋這項新興運動💪🍀🍀</p>
      </footer>
    </div>
  );
}

export default App;