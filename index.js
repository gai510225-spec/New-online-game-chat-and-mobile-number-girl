function guess() {
    let lucky = Math.floor(Math.random() * 10) + 1;
    let user = document.getElementById('numInp').value;
    let r = document.getElementById('res1');
    if(user == lucky) r.innerHTML = "🎉 واہ! آپ جیت گئے۔ نمبر " + lucky + " ہی تھا۔";
    else r.innerHTML = "❌ غلط! صحیح نمبر " + lucky + " تھا۔";
}

function chat() {
    let m = document.getElementById('chatInp').value.toLowerCase();
    let r = document.getElementById('res2');
    if(m.includes("salam") || m.includes("سلام")) r.innerHTML = "بوٹ: وعلیکم السلام! کیا حال ہے؟";
    else if(m.includes("name") || m.includes("نام")) r.innerHTML = "بوٹ: میرا نام سپر گیم بوٹ ہے۔";
    else r.innerHTML = "بوٹ: بہت خوب! کچھ اور پوچھیں۔";
}
