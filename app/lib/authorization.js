export async function authorize() {
const allowedIp = ['49.37.209.219'];  
    var response = await fetch('https://api.ipify.org?format=json');
    var data = await response.json();
    if(allowedIp.includes(data.ip)){
      return true;
    }
    return false;
}