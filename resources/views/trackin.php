<?php include __DIR__ . "/layout/header.php";?>

<!-- starts -->
    <main class="bg-white"> 
        <nav class="bg-[#11172b] p-0">
            <section class="lg:px-[10%] px-[2%] flex justify-between items-center ">
                <aside class="flex lg:space-x-4 space-x-2"><a href="/" style="color:red">MILITARY CHECK<!--img alt="Logo" loading="lazy" width="250" height="200" decoding="async" data-nimg="1" class="cursor-pointer hover:scale-105 transition duration-200 ease-out transform lg:w-[250px] lg:h-[100px] w-[150px] h-[70px] object-contain " style="color:transparent"
                         src="Airlines.png" --></a></aside>
                <aside class="flex-col relative hidden lg:flex">
                    <section class="relative">
                        <ul class="flex space-x-4 justify-end text-white">
                            <li class="text-white text-sm cursor-pointer flex space-x-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                                <span
                                    class="text-xs">English -  $</span>
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
                    <h1 class="text-black lg:text-4xl font-bold">INPUT ID NUMBER</h1><span class="text-gray-500">All past and present</span></div>
            </section>
            <div class="mt-10 block " >
                <section class="border-2 border-[#11172b]">
                    <div class="bg-[#11172b] text-white p-4 flex items-center">Find Record</div>
                   <div class="alert danger"></div>

                    <form class="p-4" method="POST">
                        <div class="">
                            <label for="staffId" class="text-sm text-black"> ID NUMBER</label>
                            <input  type="text" id="saffId" class="w-full border-2 rounded-md p-2 text-black" name="staffId" required/>
                        </div>
                        <div class=" mt-6 ">
                            <input type="submit" name="submit" class="bg-[#11172b] text-white p-4 rounded-md flex items-center text-black" value="ID VERIFY">
                        </div>
                    </form>
                </section>
   <section class="mt-10" id="faq" >
                    <em class="text-blacktext-4xl" style="color: Orange;">DISCLAIMER</em><br/>
                    <p style="color: black;">This military security ID card is the property of the issuing authority and is intended for official use only. Unauthorized use, reproduction, or alteration of this card is strictly prohibited. Verification of this ID card is required for access to secure areas. In case of loss or theft, report immediately to the appropriate authorities.</p><p style="color: black;"> This card remains the property of the military and must be surrendered upon request.</p>
                     
 </section>
        </div>
       
        <?php 
     //   search_funtion();
         ?>
        </div>
    </main>
    
    
    
 <?php include __DIR__ . "/layout/footer.php";?>
    
    
    
    