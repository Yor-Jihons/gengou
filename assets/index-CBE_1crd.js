(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1868,t=new Date().getFullYear()+10;function n(){let n=``,r=new Date().getFullYear();for(let i=t;i>=e;i--)n+=`<option value="${i}" ${i===r?`selected`:``}>${i}年</option>`;return n}function r(e){let t=new Date(e,11,31);return new Intl.DateTimeFormat(`ja-JP-u-ca-japanese`,{era:`long`,year:`numeric`}).format(t)}function i(){let e=document.getElementById(`yearSelect`),t=document.getElementById(`resultArea`);!e||!t||(t.innerText=r(Number(e.value)))}document.querySelector(`#app`).innerHTML=`
  <div id="center">
    <h1>年号変換</h1>
    <div class="converter-card">
      <div class="input-group">
        <label for="yearSelect">西暦を選択:</label>
        <select id="yearSelect" class="counter">
          ${n()}
        </select>
      </div>
      <div class="result-display">
        <p>和暦</p>
        <div id="resultArea" class="gengo-result"></div>
      </div>
    </div>
  </div>
`,document.getElementById(`yearSelect`)?.addEventListener(`change`,i),i();