export async function authorize() {
const allowedIp = ['49.37.209.163'];  
    var response = await fetch('https://api.ipify.org?format=json');
    var data = await response.json();
    console.log(data.ip)
    if(allowedIp.includes(data.ip)){
      return true;
    }
    return false;
}