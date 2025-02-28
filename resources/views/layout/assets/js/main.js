$(document).ready(() => {
    function userlocation(){

        if(navigator.onLine == false){
            $("#uip").hide();
        } 
        // else {
        //     fetch("https://ipinfo.io/json")
        //     .then((resp) => resp.json())
        //     .then((data) => {
        //       console.log(data.country); // Corrected property name to 'country'
        //     })
        //     .catch((error) => {
        //       console.error('Error fetching IP info:', error);
        //     });

        // }
        
        
        // try {
        //     // $details = json_decode(file_get_contents(""));
        //     echo "<p id='uip'>Your Loction:&nbsp; <span class='fi fi-" . strtolower(htmlentities($details->country)) . " '></span></p>" ;
        // } catch (Exception $thip) {
        //     error_log($thip->getMessage());
        // }
    }
    userlocation();
})