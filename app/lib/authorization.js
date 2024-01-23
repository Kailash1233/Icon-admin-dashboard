export async function authorize() {
const allowedIp = ['49.37.209', '192.168.1','192.168.0','223.187.115']; 
    var response = await fetch('https://api.ipify.org?format=json');
    var data = await response.json();
    var ip = data.ip.split(".",3).toString().replaceAll(',','.');
    console.log(ip);
    if(allowedIp.includes(ip)){
      return true;
    }
    return false;
}