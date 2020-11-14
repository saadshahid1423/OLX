import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class DropDown extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  } 
    render() {
      const top100Films = [
        { title: 'Karachi' },
        { title: 'Hyderabad' },
        { title: 'Sukkur' },
        { title: 'Larkana' },
        { title: 'Nawabshah' },
        { title: 'Kotri' },
        { title: 'Mirpur Khas' },
        { title: 'Shikarpur' },
        { title: 'Jacobabad' },
        { title: 'Khairpur' },
        { title: 'Dadu' },
        { title: 'Tando Allahyar' },
        { title: 'Tando Adam Khan' },
        { title: 'Umerkot' },
        { title: 'Shahdadkot' },
        { title: 'Badin' },
        { title: 'Ghotki' },
        { title: 'Daharki' },
        { title: 'Tando Muhammad Khan' },
        { title: 'Kamber Ali Khan' },
        { title: 'Mirpur Mathelo' },
        { title: 'Kandhkot' },
        { title: 'Shahdadpur' },
        { title: 'Moro' },
        { title: 'Tando Jam' },
        { title: 'Pano Akil' },
        { title: 'Sanghar' },
        { title: 'Thul' },
        { title: 'Rohri' },
        { title: 'Ratodero' },
        { title: 'Sehwan Sharif' },
        { title: 'Hala' },
        { title: 'Sakrand' },
        { title: 'Matli' },
        { title: 'Kashmore' },
        { title: 'Mehar' },
        { title: 'Thatta' },
        { title: 'Mehrabpur' },
        { title: 'Gambat' },
        { title: 'Khipro' },
        { title: 'Lahore' },
        { title: 'Faisalabad' },
        { title: 'Rawalpindi' },
        { title: 'Gujranwala' },
        { title: 'Multan' },
        { title: 'Bahawalpur' },
        { title: 'Sargodha' },
        { title: 'Sheikhupura' },
        { title: 'Rahim Yar Khan' },
        { title: 'Jhang' },
        { title: 'Dera Ghazi Khan' },
        { title: 'Gujrat' },
        { title: 'Sahiwal' },
        { title: 'Wah Cantonment' },
        { title: 'Kasur' },
        { title: 'Okara' },
        { title: 'Chiniot' },
        { title: 'Kamoke'},
        { title: 'Hafizabad' },
        { title: 'Sadiqabad' },
        { title: 'Burewala' },
        { title: 'Khanewal' },
        { title: 'Muzaffargarh' },
        { title: 'Mandi Bahauddin' },
        { title: 'Jhelum' },
        { title: 'Khanpur' },
        { title: 'Pakpattan' },
        { title: 'Daska' },
        { title: 'Gojra' },
        { title: 'Muridke' },
        { title: 'Bahawalnagar' },
        { title: 'Samundri' },
        { title: 'Jaranwala' },
        { title: 'Chishtian' },
        { title: 'Attock' },
        { title: 'Vehari' },
        { title: 'Kot Abdul Malik' },
        { title: 'Ferozewala' },
        { title: 'Chakwal' },
        { title: 'Gujranwala Cantonment' },
        { title: 'Kamalia' },
        { title: 'Ahmedpur East' },
        { title: 'Kot Addu' },
        { title: 'Wazirabad' },
        { title: 'Layyah'},
        { title: 'Taxila' },
        { title: 'Khushab' },
        { title: 'Mianwali' },
        { title: 'Lodhran' },
        { title: 'Hasilpur' },
        { title: 'Bhakkar' },
        { title: 'Arif Wala' },
        { title: 'Sambrial' },
        { title: 'Jatoi' },
        { title: 'Haroonabad' },
        { title: 'Narowal' },
        { title: 'Bhalwal' },
        { title: 'Islamabad' },
        { title: 'Quetta' },
        { title: 'Turbat' },
        { title: 'Khuzdar' },
        { title: 'Hub' },
        { title: 'Chaman' },
        { title: 'Dera Murad Jamali' },
        { title: 'Gwadar' },
        { title: 'Dera Allah Yar' },
        { title: 'Usta Mohammad' },
        { title: 'Sui Town' },
        { title: 'Sibi' },
        { title: 'Loralai' },
        { title: 'Tump' },
        { title: 'Nushki' },
        { title: 'Zhob' },
        { title: 'Kharan' },
        { title: 'Chitkan' },
        { title: 'Khanozai' },
        { title: 'Buleda' },
        { title: 'Saranan' },
        { title: 'Saranan' },
        { title: 'Qalat' },
        { title: 'Tasp' },
        { title: 'Surab' },
        { title: 'Pishin' },
        { title: 'Mastung' },
        { title: 'Qilla Saifullah' },
        { title: 'Pasni' },
        { title: 'Nal' },
        { title: 'Winder' },
        { title: 'Uthal' },
        { title: 'Huramzai' },
        { title: 'Muslim Bagh' },
        { title: 'Dera Bugti' },
        { title: 'Qilla Abdullah' },
        { title: 'Bela' },
        { title: 'Wadh' },
        { title: 'Washuk' },
        { title: 'Awaran' },
        { title: 'Machh' },
        { title: 'Jiwani' },
        { title: 'Ormara' },
        { title: 'Kohlu' },
        { title: 'Bhag' },
        { title: 'Dalbandin' },
        { title: 'Dhadar' },
        { title: 'Musakhel' },
        { title: 'Harnai' },
        { title: 'Dureji' },
        { title: 'Sohbatpur ' },
        { title: 'Gajjar Mashkay' },
        { title: 'Barkhan' },
        { title: 'Shahrug' },
        { title: 'Duki' },
        { title: 'Peshawar' },
        { title: 'Mardan' },
        { title: 'Mingora' },
        { title: 'Kohat' },
        { title: 'Dera Ismail Khan' },
        { title: 'Abbottabad' },
        { title: 'Mansehra' },
        { title: 'Swabi' },
        { title: 'Nowshera' },
        { title: 'Kabal' },
        { title: 'Charsadda' },
        { title: 'Barikot' },
        { title: 'Shabqadar' },
        { title: 'Haripur' },
        { title: 'Takht-i-Bahi' },
        { title: 'Paharpur' },
        { title: 'Batkhela' },
        { title: 'Jamrud' },
        { title: 'Bahrain' },
        { title: 'Lakki Marwat' },
        { title: 'Pabbi' },
        { title: 'Topi' },
        { title: 'Jehangira' },
        { title: 'Karak' },
        { title: 'Bannu' },
        { title: 'Chitral' },
        { title: 'Hangu' },
        { title: 'Havelian' },
        { title: 'Khwazakhela' },
        { title: 'Khalabat' },
        { title: 'Tank' },
        { title: 'Dir ' },
        { title: 'Matta' },
        { title: 'Tordher' },
        { title: 'Timargara' },
        { title: 'Paroa' },
        { title: 'Amangarh' },
        { title: 'Risalpur' },
        { title: 'Nawan Shehr' },
        { title: 'Sadda' },
        { title: 'Landi Kotal' },
        { title: 'Tangi' },
        { title: 'Akora Khattak' },
        { title: 'Tall' },
        { title: 'Zaida'},
        { title: 'Utmanzai' },
      ];
      return (
        <div style={{ width: 300, marginLeft: "20px"}}>
        <Autocomplete
          freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search City"
                margin="normal"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: 'search' }}
              />
            )}
          />
      </div>
      )
    }
};
export default DropDown;