import './style.css'


const minYear: number = 1912;
const maxCountYears: number = 601;

export function CreateYearsOptionsTexts(){
  let text = "";

  const selectedYear = (new Date()).getFullYear();

  for( let i = 0; i < maxCountYears; i++ ){
    const y = i + minYear;
    text += '<option value="' + y  + '"' + (y === selectedYear ? "selected" : '') + ' >' +  y + "年</option>";
  }
  return text;
}

export function CreateMonthsOptionsTexts(){
  let text = "";

  const selectedMonth = (new Date()).getMonth() + 1;

  for( let i = 0; i < 12; i++ ){
    const m = i + 1;
    text += '<option value="' + m  + '"' + (m === selectedMonth ? "selected" : '') + ' >' +  m + "月</option>";
  }
  return text;
}

export function CreateDaysOptionsTexts(){
  let text = "";
  const nowDate = new Date();

  const selectedDay = nowDate.getDate();

  // 今月末の日付を取得する
  nowDate.setMonth( nowDate.getMonth() + 1, 0 );
  const maxDays4ThisMonth = nowDate.getDate();

  for( let i = 0; i < maxDays4ThisMonth; i++ ){
    const d = i + 1;
    text += '<option value="' + d  + '"' + (d === selectedDay ? "selected" : '') + ' >' +  d + "日</option>";
  }
  return text;
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="flexbox1">
  <select>
    ${CreateYearsOptionsTexts()}
  </select>
  <select>
    ${CreateMonthsOptionsTexts()}
  </select>
  <select>
    ${CreateDaysOptionsTexts()}
  </select>
</div>
<div id="result_area">OK</div>
`;
