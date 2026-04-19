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

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="flexbox1">
  <select>
    ${CreateYearsOptionsTexts()}
  </select>
  <select>
    ${CreateMonthsOptionsTexts()}
  </select>
  <select>
    <option value="1">1日</option>
    <option value="2">2日</option>
    <option value="3">3日</option>
    <option value="4">4日</option>
    <option value="5">5日</option>
    <option value="6">6日</option>
    <option value="7">7日</option>
    <option value="8">8日</option>
    <option value="9">9日</option>
    <option value="10">10日</option>
    <option value="11">11日</option>
    <option value="12">12日</option>
    <option value="13">13日</option>
    <option value="14">14日</option>
    <option value="15">15日</option>
    <option value="16">16日</option>
    <option value="17">17日</option>
    <option value="18">18日</option>
    <option value="19">19日</option>
    <option value="20">20日</option>
    <option value="21">21日</option>
    <option value="22">22日</option>
    <option value="23">23日</option>
    <option value="24">24日</option>
    <option value="25">25日</option>
    <option value="26">26日</option>
    <option value="27">27日</option>
    <option value="28">28日</option>
    <option value="29">29日</option>
    <option value="30">30日</option>
    <option value="31">30日</option>
  </select>
</div>
`