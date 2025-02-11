<?php 
include __DIR__ . "/layout/header.php";
?>
    
    
       
   
<main class="bg-white"> 
        <nav class="bg-[#11172b] p-0">
            <section class="lg:px-[10%] px-[2%] flex justify-between items-center ">
                <aside class="flex lg:space-x-4 space-x-2"><a href="/" style="color:red">MILITARY CHECK<!--img alt="Logo" loading="lazy" width="250" height="200" decoding="async" data-nimg="1" class="cursor-pointer hover:scale-105 transition duration-200 ease-out transform lg:w-[250px] lg:h-[100px] w-[150px] h-[70px] object-contain " style="color:transparent"
                         src="Airlines.png" --></a></aside>
                <aside class="flex-col relative hidden lg:flex">
                    <section class="relative" hidden>
                        <ul class="flex space-x-4 justify-end text-white">
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                                <span
                                    class="text-xs">English - United States $</span>
                            </li>
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                <span
                                    class="text-xs">Search</span>
                            </li>
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <span
                                    class="text-xs">SIGN IN</span>
                            </li>
                        </ul>
                    </section>
                    <section class="relative mt-4">
                        <ul class="flex space-x-4 text-whitee">
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><span class="font-bold text-white">BOOK</span></li>
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><span class="font-bold text-white">MY TRIPS</span></li>
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><span class="font-bold text-white">TRAVEL INFO</span></li>
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><span class="font-bold text-white">MILEAGEPLUS ®PROGRAMS</span></li>
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><span class="font-bold text-white">DEALS</span></li>
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><span class="font-bold text-white">HELP</span></li>
                        </ul>
                    </section>
                </aside>
                <aside class="flex lg:hidden"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button></aside>
                <div
                    class="hidden absolute top-0 left-0 w-full z-100 h-screen bg-black bg-opacity-90">
                    <div class="flex-col justify-end"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute top-4 right-4 cursor-pointer"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
                    <div
                        class="flex flex-col h-screen pt-[68px] pl-[10px]">
                        <ul class="flex flex-col space-y-6 text-white">
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><span class="font-bold text-white">BOOK</span></li>
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><span class="font-bold text-white">MY TRIPS</span></li>
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><span class="font-bold text-white">TRAVEL INFO</span></li>
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><span class="font-bold text-white">MILEAGEPLUS ®PROGRAMS</span></li>
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><span class="font-bold text-white">DEALS</span></li>
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><span class="font-bold text-white">HELP</span></li>
                        </ul>
                        </div>
                        </div>
            </section>
        </nav>
        <div class="lg:px-[10%] px-[2%]" >
            <section class="mt-8">
                <div class="flex space-x-8 items-center">
                    <h1 class="text-black lg:text-4xl font-bold">Details</h1><span class="text-gray-500">All past and present</span></div>
            </section>
       
         <?php 
$vv = 6;
if($vv == 6){
  //  header("location: /");
} else {
    $r_fetch = $_SESSION['staff_user']; 


echo "
<div class='mt-6 ' id='perR2332'>
<div class=''>
<div class='bg-white p-4 rounded-lg shadow-md'>
<div class='text-center'><img alt='Profile Image' loading='lazy' width='128' height='128' decoding='async' data-nimg='1' class='w-60 h-80 object-cover mx-auto' style='color:transparent'
        src='id/" . $r_fetch['EmployeeID'] . ".jpeg' />
    <h1 class='text-3xl font-bold my-4'>" . $r_fetch['FullName'] . "</h1>
</div>
<div class=''>
    <div class='bg-white p-6 rounded-lg shadow-md text-black'>
        <h2 class='text-xl font-bold mb-2'>Personal Information:</h2>
        <p>   Full Name:       " .  $r_fetch['FullName']  . " </p>
        <p>   Contact Details:       " . $r_fetch['ContactDetails']  . "</p>
        <p>   Address:        " . $r_fetch['Address']  . " </p>
        <p>   Date of Birth:    " .  $r_fetch['dob']  . " </p>
        <h2 class='text-xl font-bold mt-8 mb-2'>Deployment Information:</h2>
        <p>   Current Status:       " . $r_fetch['job'] . " </p>
        <p>   ID Number:       " .  $r_fetch['EmployeeID']   . "</p>
        <p>   Reporting Officer:        " . $r_fetch['ReportingManager']  . " </p>
        <p>   Deployment:        " . $r_fetch['workLocation']  . " </p>
        <h2 class='text-xl font-bold mt-8 mb-2'>Current Rank :</h2>
        <p>   Educational Qualifications:        " . $r_fetch['Educational']  . " </p>
        <p>   Certifications:       " . $r_fetch['Certifications']   . "</p>
        <p>   Current Rank:        " . $r_fetch['TrainingCertifications']   . "</p>
        <h2 class='text-xl font-bold mt-8 mb-2'>Security Clearance and Background Check Information:</h2>
        <p>   Security Clearance Level:        " . $r_fetch['SecurityClearanceLevel']    . " </p>
        <p>   Background Check:        " . $r_fetch['BackgroundCheck']   . "</p>
        <h2 class='text-xl font-bold mt-8 mb-2'>Additional Information:</h2>
        <p>   Language Proficiency:       " . $r_fetch['Language']   . " </p>
        <p>   Additional Skills:        " . $r_fetch['Skills']     . " </p>
        <p>   Specialized Training:        " . $r_fetch['SpecializedTraining']  . " </p>
    </div>
</div>
</div>
</div>
</div>
";

        } ?>
        </div>
    </main>
    
    <?php include __DIR__ . "/layout/footer.php";?>
    
    