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

function convertToGengo( year: number ){
    // 1月1日時点のDateオブジェクトを作成
    const d = new Date(year, 0, 1);

    // 和暦（japaneseカレンダー）を指定してフォーマット
    const formatter = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
        era: 'long',
        year: 'numeric'
    });

    return formatter.format(d); // 例: "令和6年"
}

function select_onchange(){
  const yearSelect = document.getElementById("yearSelect") as HTMLSelectElement;
  const monthSelect = document.getElementById("monthSelect") as HTMLSelectElement;
  const dateSelect = document.getElementById("dateSelect") as HTMLSelectElement;

  const y = Number( yearSelect.value );
  const m = Number( monthSelect.value );
  const d = Number( dateSelect.value );

  const resultArea = document.getElementById("result_area");
  if( resultArea === undefined || resultArea === null ) return;
  resultArea.innerHTML = convertToGengo( y );
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="flexbox1">
  <select id="yearSelect">
    ${CreateYearsOptionsTexts()}
  </select>
  <select id="monthSelect">
    ${CreateMonthsOptionsTexts()}
  </select>
  <select id="dateSelect">
    ${CreateDaysOptionsTexts()}
  </select>
</div>
<div id="result_area"></div>
`;

document.getElementById("yearSelect")?.addEventListener( "change", select_onchange );
document.getElementById("monthSelect")?.addEventListener( "change", select_onchange );
document.getElementById("dateSelect")?.addEventListener( "change", select_onchange );
