import React from 'react'
import Sidenav from '../components/sidenav'

function AddProduct() {
  return (
    <div class="py-5 md:py-0 bg-black/[0.15] dark:bg-transparent">
    <div class="flex mt-[4.7rem] md:mt-0 overflow-hidden">
  <Sidenav/>
        <div class="content">
          
            <div class="top-bar -mx-4 px-4 md:mx-0 md:px-0">
               
                <nav aria-label="breadcrumb" class="-intro-x mr-auto hidden sm:flex">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Application</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>

                <div class="intro-x relative mr-3 sm:mr-6">
                    <div class="search hidden sm:block">
                        <input type="text" class="search__input form-control border-transparent" placeholder="Search..."/>
                        <i data-lucide="search" class="search__icon dark:text-slate-500"></i> 
                    </div>
                    <a class="notification sm:hidden" href=""> <i data-lucide="search" class="notification__icon dark:text-slate-500"></i> </a>
                    <div class="search-result">
                        <div class="search-result__content">
                            <div class="search-result__content__title">Pages</div>
                            <div class="mb-5">
                                <a href="" class="flex items-center">
                                    <div class="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full"> <i class="w-4 h-4" data-lucide="inbox"></i> </div>
                                    <div class="ml-3">Mail Settings</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full"> <i class="w-4 h-4" data-lucide="users"></i> </div>
                                    <div class="ml-3">Users & Permissions</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full"> <i class="w-4 h-4" data-lucide="credit-card"></i> </div>
                                    <div class="ml-3">Transactions Report</div>
                                </a>
                            </div>
                            <div class="search-result__content__title">Users</div>
                            <div class="mb-5">
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-2.jpg"/>
                                    </div>
                                    <div class="ml-3">Keanu Reeves</div>
                                    <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">keanureeves@left4code.com</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-3.jpg"/>
                                    </div>
                                    <div class="ml-3">Angelina Jolie</div>
                                    <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">angelinajolie@left4code.com</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-13.jpg"/>
                                    </div>
                                    <div class="ml-3">Brad Pitt</div>
                                    <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">bradpitt@left4code.com</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-4.jpg"/>
                                    </div>
                                    <div class="ml-3">John Travolta</div>
                                    <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">johntravolta@left4code.com</div>
                                </a>
                            </div>
                            <div class="search-result__content__title">Products</div>
                            <a href="" class="flex items-center mt-2">
                                <div class="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/preview-1.jpg"/>
                                </div>
                                <div class="ml-3">Apple MacBook Pro 13</div>
                                <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">PC &amp; Laptop</div>
                            </a>
                            <a href="" class="flex items-center mt-2">
                                <div class="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/preview-7.jpg"/>
                                </div>
                                <div class="ml-3">Dell XPS 13</div>
                                <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">PC &amp; Laptop</div>
                            </a>
                            <a href="" class="flex items-center mt-2">
                                <div class="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/preview-1.jpg"/>
                                </div>
                                <div class="ml-3">Samsung Galaxy S20 Ultra</div>
                                <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">Smartphone &amp; Tablet</div>
                            </a>
                            <a href="" class="flex items-center mt-2">
                                <div class="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/preview-3.jpg"/>
                                </div>
                                <div class="ml-3">Apple MacBook Pro 13</div>
                                <div class="ml-auto w-48 truncate text-slate-500 text-xs text-right">PC &amp; Laptop</div>
                            </a>
                        </div>
                    </div>
                </div>
              
                <div class="intro-x dropdown mr-auto sm:mr-6">
                    <div class="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="bell" class="notification__icon dark:text-slate-500"></i> </div>
                    <div class="notification-content pt-2 dropdown-menu">
                        <div class="notification-content__box dropdown-content">
                            <div class="notification-content__title">Notifications</div>
                            <div class="cursor-pointer relative flex items-center ">
                                <div class="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-2.jpg"/>
                                    <div class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Keanu Reeves</a> 
                                        <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">05:09 AM</div>
                                    </div>
                                    <div class="w-full truncate text-slate-500 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                </div>
                            </div>
                            <div class="cursor-pointer relative flex items-center mt-5">
                                <div class="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-3.jpg"/>
                                    <div class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Angelina Jolie</a> 
                                        <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">03:20 PM</div>
                                    </div>
                                    <div class="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                </div>
                            </div>
                            <div class="cursor-pointer relative flex items-center mt-5">
                                <div class="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-13.jpg"/>
                                    <div class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Brad Pitt</a> 
                                        <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div class="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                </div>
                            </div>
                            <div class="cursor-pointer relative flex items-center mt-5">
                                <div class="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-4.jpg"/>
                                    <div class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">John Travolta</a> 
                                        <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">06:05 AM</div>
                                    </div>
                                    <div class="w-full truncate text-slate-500 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                </div>
                            </div>
                            <div class="cursor-pointer relative flex items-center mt-5">
                                <div class="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" class="rounded-full" src="dist/images/profile-15.jpg"/>
                                    <div class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Leonardo DiCaprio</a> 
                                        <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">05:09 AM</div>
                                    </div>
                                    <div class="w-full truncate text-slate-500 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="intro-x dropdown w-8 h-8">
                    <div class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in" role="button" aria-expanded="false" data-tw-toggle="dropdown">
                        <img alt="Midone - HTML Admin Template" src="dist/images/profile-5.jpg"/>
                    </div>
                    <div class="dropdown-menu w-56">
                        <ul class="dropdown-content bg-primary text-white">
                            <li class="p-2">
                                <div class="font-medium">Keanu Reeves</div>
                                <div class="text-xs text-white/70 mt-0.5 dark:text-slate-500">Backend Engineer</div>
                            </li>
                            <li>
                                <hr class="dropdown-divider border-white/[0.08]"/>
                            </li>
                            <li>
                                <a href="" class="dropdown-item hover:bg-white/5"> <i data-lucide="user" class="w-4 h-4 mr-2"></i> Profile </a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item hover:bg-white/5"> <i data-lucide="edit" class="w-4 h-4 mr-2"></i> Add Account </a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item hover:bg-white/5"> <i data-lucide="lock" class="w-4 h-4 mr-2"></i> Reset Password </a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item hover:bg-white/5"> <i data-lucide="help-circle" class="w-4 h-4 mr-2"></i> Help </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider border-white/[0.08]"/>
                            </li>
                            <li>
                                <a href="" class="dropdown-item hover:bg-white/5"> <i data-lucide="toggle-right" class="w-4 h-4 mr-2"></i> Logout </a>
                            </li>
                        </ul>
                    </div>
                </div>
             
            </div>
            <div class="intro-y flex items-center mt-8">
                    <h2 class="text-lg font-medium mr-auto">
                        Add Product
                    </h2>
                </div>
            <div class="grid grid-cols-11 gap-x-6 mt-5 pb-20">
                   
                    <div class="intro-y col-span-11 alert alert-primary alert-dismissible show flex items-center mb-6" role="alert">
                        <span><i data-lucide="info" class="w-4 h-4 mr-2"></i></span>
                        <span>Starting May 10, 2021, there will be changes to the Terms & Conditions regarding the number of products that may be added by the Seller. <a href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820" class="underline ml-1" target="blank">Learn More</a></span>
                        <button type="button" class="btn-close text-white" data-tw-dismiss="alert" aria-label="Close"> <i data-lucide="x" class="w-4 h-4"></i> </button>
                    </div>
                  
                    <div class="intro-y col-span-11 2xl:col-span-9">
                       
                        <div class="intro-y box p-5">
                            <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                                <div class="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5"> <i data-lucide="chevron-down" class="w-4 h-4 mr-2"></i> Upload Product </div>
                                <div class="mt-5">
                                    <div class="flex items-center text-slate-500">
                                        <span><i data-lucide="lightbulb" class="w-5 h-5 text-warning"></i></span>
                                        <div class="ml-2"> <span class="mr-1">Avoid selling counterfeit products / violating Intellectual Property Rights, so that your products are not deleted.</span> <a href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820" class="text-primary font-medium" target="blank">Learn More</a> </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-10">
                                        <div class="form-label w-full xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Product Photos</div>
                                                    <div class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3">
                                                    <div>The image format is .jpg .jpeg .png and a minimum size of 300 x 300 pixels (For optimal images use a minimum size of 700 x 700 pixels).</div>
                                                    <div class="mt-2">Select product photos or drag and drop up to 5 photos at once here. Include min. 3 attractive photos to make the product more attractive to buyers.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1 border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
                                            <div class="grid grid-cols-10 gap-5 pl-4 pr-5">
                                                <div class="col-span-5 md:col-span-2 h-28 relative image-fit cursor-pointer zoom-in">
                                                    <img class="rounded-md" alt="Midone - HTML Admin Template" src="dist/images/preview-1.jpg"/>
                                                    <div title="Remove this image?" class="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"> <i data-lucide="x" class="w-4 h-4"></i> </div>
                                                </div>
                                                <div class="col-span-5 md:col-span-2 h-28 relative image-fit cursor-pointer zoom-in">
                                                    <img class="rounded-md" alt="Midone - HTML Admin Template" src="dist/images/preview-3.jpg"/>
                                                    <div title="Remove this image?" class="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"> <i data-lucide="x" class="w-4 h-4"></i> </div>
                                                </div>
                                                <div class="col-span-5 md:col-span-2 h-28 relative image-fit cursor-pointer zoom-in">
                                                    <img class="rounded-md" alt="Midone - HTML Admin Template" src="dist/images/preview-1.jpg"/>
                                                    <div title="Remove this image?" class="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"> <i data-lucide="x" class="w-4 h-4"></i> </div>
                                                </div>
                                                <div class="col-span-5 md:col-span-2 h-28 relative image-fit cursor-pointer zoom-in">
                                                    <img class="rounded-md" alt="Midone - HTML Admin Template" src="dist/images/preview-14.jpg"/>
                                                    <div title="Remove this image?" class="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"> <i data-lucide="x" class="w-4 h-4"></i> </div>
                                                </div>
                                                <div class="col-span-5 md:col-span-2 h-28 relative image-fit cursor-pointer zoom-in">
                                                    <img class="rounded-md" alt="Midone - HTML Admin Template" src="dist/images/preview-11.jpg"/>
                                                    <div title="Remove this image?" class="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"> <i data-lucide="x" class="w-4 h-4"></i> </div>
                                                </div>
                                            </div>
                                            <div class="px-4 pb-4 mt-5 flex items-center justify-center cursor-pointer relative">
                                                <i data-lucide="image" class="w-4 h-4 mr-2"></i> <span class="text-primary mr-1">Upload a file</span> or drag and drop 
                                                <input id="horizontal-form-1" type="file" class="w-full h-full top-0 left-0 absolute opacity-0"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                        <div class="intro-y box p-5 mt-5">
                            <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                                <div class="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5"> <i data-lucide="chevron-down" class="w-4 h-4 mr-2"></i> Product Information </div>
                                <div class="mt-5">
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Product Name</div>
                                                    <div class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> Include min. 40 characters to make it more attractive and easy for buyers to find, consisting of product type, brand, and information such as color, material, or type. </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <input id="product-name" type="text" class="form-control" placeholder="Product name"/>
                                            <div class="form-help text-right">Maximum character 0/70</div>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Category</div>
                                                    <div class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <select id="category" class="form-select">
                                                <option value="Smartphone &amp; Tablet">Smartphone &amp; Tablet</option>
                                                <option value="Electronic">Electronic</option>
                                                <option value="PC &amp; Laptop">PC &amp; Laptop</option>
                                                <option value="Photography">Photography</option>
                                                <option value="Smartphone &amp; Tablet">Smartphone &amp; Tablet</option>
                                                <option value="Fashion &amp; Make Up">Fashion &amp; Make Up</option>
                                                <option value="Kids &amp; Baby">Kids &amp; Baby</option>
                                                <option value="Photography">Photography</option>
                                                <option value="Photography">Photography</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Subcategory</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> You can add a new subcategory or choose from the existing subcategory list. </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <select id="subcategory" data-placeholder="Etalase" class="tom-select w-full" multiple>
                                                <option selected value="Smartphone &amp; Tablet">Smartphone &amp; Tablet</option>
                                                <option selected value="Electronic">Electronic</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="intro-y box p-5 mt-5">
                            <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                                <div class="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5"> <i data-lucide="chevron-down" class="w-4 h-4 mr-2"></i> Product Detail </div>
                                <div class="mt-5">
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Condition</div>
                                                    <div class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="flex flex-col sm:flex-row">
                                                <div class="form-check mr-4">
                                                    <input id="condition-new" class="form-check-input" type="radio" name="horizontal_radio_button" value="horizontal-radio-chris-evans"/>
                                                    <label class="form-check-label" for="condition-new">New</label>
                                                </div>
                                                <div class="form-check mr-4 mt-2 sm:mt-0">
                                                    <input id="condition-second" class="form-check-input" type="radio" name="horizontal_radio_button" value="horizontal-radio-liam-neeson"/>
                                                    <label class="form-check-label" for="condition-second">Second</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Product Description</div>
                                                    <div class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3">
                                                    <div>Make sure the product description provides a detailed explanation of your product so that it is easy to understand and find your product.</div>
                                                    <div class="mt-2">It is recommended not to enter info on mobile numbers, e-mails, etc. into the product description to protect your personal data.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="editor">
                                                <p>Content of the editor.</p>
                                            </div>
                                            <div class="form-help text-right">Maximum character 0/2000</div>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Product Video</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> Add a video so that buyers are more interested in your product. <a href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820" class="text-primary font-medium" target="blank">Learn more.</a> </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <button class="btn btn-outline-secondary w-40"> <i data-lucide="plus" class="w-4 h-4 mr-2"></i> Add Video URL </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                        <div class="intro-y box p-5 mt-5">
                            <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                                <div class="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5"> <i data-lucide="chevron-down" class="w-4 h-4 mr-2"></i> Product Variant </div>
                                <div class="mt-5">
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label sm:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Product Variant</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-2"> Add variants such as color, size, or more. Choose a maximum of 2 variant types. </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1 xl:text-right">
                                            <button class="btn btn-primary w-44"> <i data-lucide="plus" class="w-4 h-4 mr-2"></i> Add Variant </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                        <div class="intro-y box p-5 mt-5">
                            <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                                <div class="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5"> <i data-lucide="chevron-down" class="w-4 h-4 mr-2"></i> Product Variant (Details) </div>
                                <div class="mt-5">
                                    <div class="form-inline items-start flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Variant 1</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> Add the types of variants and options, you can add up to 5 options. </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="relative pl-5 pr-5 xl:pr-10 py-10 bg-slate-50 dark:bg-transparent dark:border rounded-md">
                                                <a href="" class="text-slate-500 absolute top-0 right-0 mr-4 mt-4"> <i data-lucide="x" class="w-5 h-5"></i> </a>
                                                <div>
                                                    <div class="form-inline mt-5 first:mt-0">
                                                        <label class="form-label sm:w-20">Name</label>
                                                        <div class="flex items-center flex-1 xl:pr-20">
                                                            <div class="input-group flex-1">
                                                                <input type="text" class="form-control" placeholder="Size"/>
                                                                <div class="input-group-text">6/14</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-inline mt-5 items-start first:mt-0">
                                                        <label class="form-label mt-2 sm:w-20">Options</label>
                                                        <div class="flex-1">
                                                            <div class="xl:flex items-center mt-5 first:mt-0">
                                                                <div class="input-group flex-1">
                                                                    <input type="text" class="form-control" placeholder="Small"/>
                                                                    <div class="input-group-text">6/14</div>
                                                                </div>
                                                                <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                                                                    <a href="" class="xl:ml-5"> <i data-lucide="move" class="w-4 h-4"></i> </a>
                                                                    <a href="" class="ml-3 xl:ml-5"> <i data-lucide="trash-2" class="w-4 h-4"></i> </a>
                                                                </div>
                                                            </div>
                                                            <div class="xl:flex items-center mt-5 first:mt-0">
                                                                <div class="input-group flex-1">
                                                                    <input type="text" class="form-control" placeholder="Medium"/>
                                                                    <div class="input-group-text">6/14</div>
                                                                </div>
                                                                <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                                                                    <a href="" class="xl:ml-5"> <i data-lucide="move" class="w-4 h-4"></i> </a>
                                                                    <a href="" class="ml-3 xl:ml-5"> <i data-lucide="trash-2" class="w-4 h-4"></i> </a>
                                                                </div>
                                                            </div>
                                                            <div class="xl:flex items-center mt-5 first:mt-0">
                                                                <div class="input-group flex-1">
                                                                    <input type="text" class="form-control" placeholder="Large"/>
                                                                    <div class="input-group-text">6/14</div>
                                                                </div>
                                                                <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                                                                    <a href="" class="xl:ml-5"> <i data-lucide="move" class="w-4 h-4"></i> </a>
                                                                    <a href="" class="ml-3 xl:ml-5"> <i data-lucide="trash-2" class="w-4 h-4"></i> </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="xl:ml-20 xl:pl-5 xl:pr-20 mt-5 first:mt-0">
                                                        <button class="btn btn-outline-primary border-dashed w-full"> <i data-lucide="plus" class="w-4 h-4 mr-2"></i> Add New Option </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Variant 2</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> Add the types of variants and options, you can add up to 5 options. </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="relative pl-5 pr-5 xl:pr-10 py-10 bg-slate-50 dark:bg-transparent dark:border rounded-md">
                                                <a href="" class="text-slate-500 absolute top-0 right-0 mr-4 mt-4"> <i data-lucide="x" class="w-5 h-5"></i> </a>
                                                <div>
                                                    <div class="form-inline mt-5 first:mt-0">
                                                        <label class="form-label sm:w-20">Name</label>
                                                        <div class="flex items-center flex-1 xl:pr-20">
                                                            <div class="input-group flex-1">
                                                                <input type="text" class="form-control" placeholder="Color"/>
                                                                <div class="input-group-text">6/14</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-inline mt-5 items-start first:mt-0">
                                                        <label class="form-label mt-2 sm:w-20">Options</label>
                                                        <div class="flex-1">
                                                            <div class="xl:flex items-center mt-5 first:mt-0">
                                                                <div class="input-group flex-1">
                                                                    <input type="text" class="form-control" placeholder="Black"/>
                                                                    <div class="input-group-text">6/14</div>
                                                                </div>
                                                                <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                                                                    <a href="" class="xl:ml-5"> <i data-lucide="move" class="w-4 h-4"></i> </a>
                                                                    <a href="" class="ml-3 xl:ml-5"> <i data-lucide="trash-2" class="w-4 h-4"></i> </a>
                                                                </div>
                                                            </div>
                                                            <div class="xl:flex items-center mt-5 first:mt-0">
                                                                <div class="input-group flex-1">
                                                                    <input type="text" class="form-control" placeholder="White"/>
                                                                    <div class="input-group-text">6/14</div>
                                                                </div>
                                                                <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                                                                    <a href="" class="xl:ml-5"> <i data-lucide="move" class="w-4 h-4"></i> </a>
                                                                    <a href="" class="ml-3 xl:ml-5"> <i data-lucide="trash-2" class="w-4 h-4"></i> </a>
                                                                </div>
                                                            </div>
                                                            <div class="xl:flex items-center mt-5 first:mt-0">
                                                                <div class="input-group flex-1">
                                                                    <input type="text" class="form-control" placeholder="Gray"/>
                                                                    <div class="input-group-text">6/14</div>
                                                                </div>
                                                                <div class="w-20 flex text-slate-500 mt-3 xl:mt-0">
                                                                    <a href="" class="xl:ml-5"> <i data-lucide="move" class="w-4 h-4"></i> </a>
                                                                    <a href="" class="ml-3 xl:ml-5"> <i data-lucide="trash-2" class="w-4 h-4"></i> </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="xl:ml-20 xl:pl-5 xl:pr-20 mt-5 first:mt-0">
                                                        <button class="btn btn-outline-primary border-dashed w-full"> <i data-lucide="plus" class="w-4 h-4 mr-2"></i> Add New Option </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="xl:ml-64 xl:pl-10 mt-2 pt-2 first:mt-0 first:pt-0">
                                        <button class="btn py-3 btn-outline-secondary border-dashed w-full"> <i data-lucide="plus" class="w-4 h-4 mr-2"></i> Add New Variant </button>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Variant Information</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> Apply price and stock on all variants or based on certain variant codes. </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="sm:grid grid-cols-4 gap-2">
                                                <div class="input-group">
                                                    <div class="input-group-text">$</div>
                                                    <input type="text" class="form-control" placeholder="Price"/>
                                                </div>
                                                <input type="text" class="form-control mt-2 sm:mt-0" placeholder="Stock"/>
                                                <input type="text" class="form-control mt-2 sm:mt-0" placeholder="Variant Code"/>
                                                <button class="btn btn-primary mt-2 sm:mt-0"> Apply To All </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Variant List</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> Set the price and stock for each variant. </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="overflow-x-auto">
                                                <table class="table border">
                                                    <thead>
                                                        <tr>
                                                            <th class="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">Size</th>
                                                            <th class="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                                                                <div class="flex items-center">Color <i data-lucide="help-circle" class="w-4 h-4 ml-2"></i></div>
                                                            </th>
                                                            <th class="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !px-2">Price</th>
                                                            <th class="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !px-2">
                                                                <div class="flex items-center">
                                                                    <div class=" relative w-4 h-4 mr-2 -mt-0.5 before:content-[''] before:absolute before:w-4 before:h-4 before:bg-primary/20 before:rounded-full lg:before:animate-ping after:content-[''] after:absolute after:w-4 after:h-4 after:bg-primary after:rounded-full after:border-4 after:border-white/60 after:dark:border-darkmode-300 "></div>
                                                                    Stock <i data-lucide="help-circle" class="w-4 h-4 ml-2"></i> 
                                                                </div>
                                                            </th>
                                                            <th class="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !pl-2">Variant Code</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td rowspan="3" class="border-r">Small</td>
                                                            <td>Black</td>
                                                            <td class="!px-2">
                                                                <div class="input-group">
                                                                    <div class="input-group-text">$</div>
                                                                    <input type="text" class="form-control min-w-[6rem]" placeholder="Price"/>
                                                                </div>
                                                            </td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Stock"/>
                                                            </td>
                                                            <td class="!pl-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Variant Code"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>White</td>
                                                            <td class="!px-2">
                                                                <div class="input-group">
                                                                    <div class="input-group-text">$</div>
                                                                    <input type="text" class="form-control min-w-[6rem]" placeholder="Price"/>
                                                                </div>
                                                            </td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Stock"/>
                                                            </td>
                                                            <td class="!pl-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Variant Code"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gray</td>
                                                            <td class="!px-2">
                                                                <div class="input-group">
                                                                    <div class="input-group-text">$</div>
                                                                    <input type="text" class="form-control min-w-[6rem]" placeholder="Price"/>
                                                                </div>
                                                            </td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Stock"/>
                                                            </td>
                                                            <td class="!pl-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Variant Code"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="3" class="border-r">Medium</td>
                                                            <td>Black</td>
                                                            <td class="!px-2">
                                                                <div class="input-group">
                                                                    <div class="input-group-text">$</div>
                                                                    <input type="text" class="form-control min-w-[6rem]" placeholder="Price"/>
                                                                </div>
                                                            </td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Stock"/>
                                                            </td>
                                                            <td class="!pl-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Variant Code"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>White</td>
                                                            <td class="!px-2">
                                                                <div class="input-group">
                                                                    <div class="input-group-text">$</div>
                                                                    <input type="text" class="form-control min-w-[6rem]" placeholder="Price"/>
                                                                </div>
                                                            </td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Stock"/>
                                                            </td>
                                                            <td class="!pl-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Variant Code"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gray</td>
                                                            <td class="!px-2">
                                                                <div class="input-group">
                                                                    <div class="input-group-text">$</div>
                                                                    <input type="text" class="form-control min-w-[6rem]" placeholder="Price"/>
                                                                </div>
                                                            </td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Stock"/>
                                                            </td>
                                                            <td class="!pl-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Variant Code"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="3" class="border-r">Large</td>
                                                            <td>Black</td>
                                                            <td class="!px-2">
                                                                <div class="input-group">
                                                                    <div class="input-group-text">$</div>
                                                                    <input type="text" class="form-control min-w-[6rem]" placeholder="Price"/>
                                                                </div>
                                                            </td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Stock"/>
                                                            </td>
                                                            <td class="!pl-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Variant Code"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>White</td>
                                                            <td class="!px-2">
                                                                <div class="input-group">
                                                                    <div class="input-group-text">$</div>
                                                                    <input type="text" class="form-control min-w-[6rem]" placeholder="Price"/>
                                                                </div>
                                                            </td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Stock"/>
                                                            </td>
                                                            <td class="!pl-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Variant Code"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gray</td>
                                                            <td class="!px-2">
                                                                <div class="input-group">
                                                                    <div class="input-group-text">$</div>
                                                                    <input type="text" class="form-control min-w-[6rem]" placeholder="Price"/>
                                                                </div>
                                                            </td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Stock"/>
                                                            </td>
                                                            <td class="!pl-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Variant Code"/>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Wholesale</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> Add wholesale price for certain quantity purchases. </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="overflow-x-auto">
                                                <table class="table border">
                                                    <thead>
                                                        <tr>
                                                            <th class="!pr-2 bg-slate-50 dark:bg-darkmode-800"></th>
                                                            <th class="bg-slate-50 dark:bg-darkmode-800"></th>
                                                            <th class="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">Min.</th>
                                                            <th class="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">Max.</th>
                                                            <th class="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">Unit Price</th>
                                                            <th class="!px-2 bg-slate-50 dark:bg-darkmode-800"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="!pr-2">1.</td>
                                                            <td class="whitespace-nowrap">Wholesale Price 1</td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Min Qty"/>
                                                            </td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Max Qty"/>
                                                            </td>
                                                            <td class="!px-2">
                                                                <div class="input-group">
                                                                    <div class="input-group-text">$</div>
                                                                    <input type="text" class="form-control min-w-[6rem]" placeholder="Price"/>
                                                                </div>
                                                            </td>
                                                            <td class="!pl-4 text-slate-500">
                                                                <a href=""> <i data-lucide="trash-2" class="w-4 h-4"></i> </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="!pr-2">2.</td>
                                                            <td class="whitespace-nowrap">Wholesale Price 2</td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Min Qty"/>
                                                            </td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Max Qty"/>
                                                            </td>
                                                            <td class="!px-2">
                                                                <div class="input-group">
                                                                    <div class="input-group-text">$</div>
                                                                    <input type="text" class="form-control min-w-[6rem]" placeholder="Price"/>
                                                                </div>
                                                            </td>
                                                            <td class="!pl-4 text-slate-500">
                                                                <a href=""> <i data-lucide="trash-2" class="w-4 h-4"></i> </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="!pr-2">3.</td>
                                                            <td class="whitespace-nowrap">Wholesale Price 3</td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Min Qty"/>
                                                            </td>
                                                            <td class="!px-2">
                                                                <input type="text" class="form-control min-w-[6rem]" placeholder="Max Qty"/>
                                                            </td>
                                                            <td class="!px-2">
                                                                <div class="input-group">
                                                                    <div class="input-group-text">$</div>
                                                                    <input type="text" class="form-control min-w-[6rem]" placeholder="Price"/>
                                                                </div>
                                                            </td>
                                                            <td class="!pl-4 text-slate-500">
                                                                <a href=""> <i data-lucide="trash-2" class="w-4 h-4"></i> </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <button class="btn btn-outline-primary border-dashed w-full mt-4"> <i data-lucide="plus" class="w-4 h-4 mr-2"></i> Add New Wholesale Price </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
       
                        <div class="intro-y box p-5 mt-5">
                            <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                                <div class="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5"> <i data-lucide="chevron-down" class="w-4 h-4 mr-2"></i> Product Management </div>
                                <div class="mt-5">
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Product Status</div>
                                                    <div class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> If the status is active, your product can be searched for by potential buyers. </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="form-check form-switch">
                                                <input id="product-status-active" class="form-check-input" type="checkbox"/>
                                                <label class="form-check-label" for="product-status-active">Active</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Product Stock</div>
                                                    <div class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <input id="product-stock" type="text" class="form-control" placeholder="Input Product Stock"/>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">SKU (Stock Keeping Unit)</div>
                                                    <div class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> Use a unique SKU code if you want to mark your product. </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <input id="sku" type="text" class="form-control" placeholder="Input SKU"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                        <div class="intro-y box p-5 mt-5">
                            <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                                <div class="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5"> <i data-lucide="chevron-down" class="w-4 h-4 mr-2"></i> Weight & Shipping </div>
                                <div class="mt-5">
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Product Weight</div>
                                                    <div class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> Enter the weight by weighing the product after it is <span class="font-medium text-slate-600 dark:text-slate-300">packaged</span>. </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="sm:grid grid-cols-4 gap-2">
                                                <select class="form-select">
                                                    <option value="Gram (g)">Gram (g)</option>
                                                    <option value="Kilogram (kg)">Kilogram (kg)</option>
                                                </select>
                                                <input type="text" id="product-weight" class="form-control mt-2 sm:mt-0" placeholder="Stock"/>
                                            </div>
                                            <div class="alert alert-outline-warning alert-dismissible show flex items-center bg-warning/20 dark:bg-darkmode-400 dark:border-darkmode-400 mt-5" role="alert">
                                                <span><i data-lucide="alert-triangle" class="w-6 h-6 mr-3"></i></span>
                                                <span class="text-slate-800 dark:text-slate-500">Pay close attention to the weight of the product so that there is no difference in data with the shipping courier. <a class="text-primary font-medium" href="">Learn More</a></span>
                                                <button type="button" class="btn-close dark:text-white" data-tw-dismiss="alert" aria-label="Close"> <i data-lucide="x" class="w-4 h-4"></i> </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Product Size</div>
                                                    <div class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">Required</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> Enter the product size after packing to calculate the volume weight. <a class="text-primary font-medium" href="">Learn Volume Weight</a> </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="sm:grid grid-cols-3 gap-2">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Width"/>
                                                    <div class="input-group-text">cm</div>
                                                </div>
                                                <div class="input-group mt-2 sm:mt-0">
                                                    <input type="text" class="form-control" placeholder="Height"/>
                                                    <div class="input-group-text">cm</div>
                                                </div>
                                                <div class="input-group mt-2 sm:mt-0">
                                                    <input type="text" class="form-control" placeholder="Length"/>
                                                    <div class="input-group-text">cm</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Shipping Insurance</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> Refund product & postage for the seller and buyer in case of damage / loss during shipping. <a class="text-primary font-medium" href="">Learn More</a> </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="flex flex-col sm:flex-row">
                                                <div class="form-check mr-4">
                                                    <input id="shipping-insurance-required" class="form-check-input" type="radio" name="horizontal_radio_button" value="horizontal-radio-chris-evans"/>
                                                    <div class="form-check-label">
                                                        <div>Required</div>
                                                        <div class="leading-relaxed text-slate-500 text-xs mt-1 w-56"> You <span class="font-medium text-slate-600 dark:text-slate-300">require</span> the buyer to activate shipping insurance </div>
                                                    </div>
                                                </div>
                                                <div class="form-check mr-4 mt-2 sm:mt-0">
                                                    <input id="shipping-insurance-optional" class="form-check-input" type="radio" name="horizontal_radio_button" value="horizontal-radio-liam-neeson"/>
                                                    <div class="form-check-label">
                                                        <div>Optional</div>
                                                        <div class="leading-relaxed text-slate-500 text-xs mt-1 w-56"> You <span class="font-medium text-slate-600 dark:text-slate-300">give the buyer the option</span> to activate shipping insurance </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">Shipping Service</div>
                                                </div>
                                                <div class="leading-relaxed text-slate-500 text-xs mt-3"> Configure shipping services according to your product type. </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="flex flex-col sm:flex-row">
                                                <div class="form-check mr-4">
                                                    <input id="shipping-service-standard" class="form-check-input" type="radio" name="horizontal_radio_button" value="horizontal-radio-chris-evans"/>
                                                    <label class="form-check-label" for="shipping-service-standard">Standard</label>
                                                </div>
                                                <div class="form-check mr-4 mt-2 sm:mt-0">
                                                    <input id="shipping-service-custom" class="form-check-input" type="radio" name="horizontal_radio_button" value="horizontal-radio-liam-neeson"/>
                                                    <label class="form-check-label" for="shipping-service-custom">Custom</label>
                                                </div>
                                            </div>
                                            <div class="leading-relaxed text-slate-500 text-xs mt-3"> The delivery service for this product will be the same as in the <a class="text-primary font-medium" href="">Shipping Settings.</a> </div>
                                        </div>
                                    </div>
                                    <div class="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                                        <div class="form-label xl:w-64 xl:!mr-10">
                                            <div class="text-left">
                                                <div class="flex items-center">
                                                    <div class="font-medium">PreOrder</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full mt-3 xl:mt-0 flex-1">
                                            <div class="form-check form-switch">
                                                <input id="preorder-active" class="form-check-input" type="checkbox"/>
                                                <label class="form-check-label leading-relaxed text-slate-500 text-xs" for="preorder-active"> Activate PreOrder if you need a longer shipping process. <a class="text-primary font-medium" href="">Learn more.</a> </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-end flex-col md:flex-row gap-2 mt-5">
                            <button type="button" class="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52">Cancel</button>
                            <button type="button" class="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52">Save & Add New Product</button>
                            <button type="button" class="btn py-3 btn-primary w-full md:w-52">Save</button>
                        </div>
                    </div>
                    <div class="intro-y col-span-2 hidden 2xl:block">
                        <div class="pt-10 sticky top-0">
                            <ul class="text-slate-500 relative before:content-[''] before:w-[2px] before:bg-slate-200 before:dark:bg-darkmode-600 before:h-full before:absolute before:left-0 before:z-[-1]">
                                <li class="mb-4 border-l-2 pl-5 border-primary dark:border-primary text-primary font-medium"> <a href="">Upload Product</a> </li>
                                <li class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent"> <a href="">Product Information</a> </li>
                                <li class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent"> <a href="">Product Detail</a> </li>
                                <li class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent"> <a href="">Product Variant</a> </li>
                                <li class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent"> <a href="">Product Variant (Details)</a> </li>
                                <li class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent"> <a href="">Product Management</a> </li>
                                <li class="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent"> <a href="">Weight & Shipping</a> </li>
                            </ul>
                            <div class="mt-10 bg-warning/20 dark:bg-darkmode-600 border border-warning dark:border-0 rounded-md relative p-5">
                                <i data-lucide="lightbulb" class="w-12 h-12 text-warning/80 absolute top-0 right-0 mt-5 mr-3"></i> 
                                <h2 class="text-lg font-medium">
                                    Tips
                                </h2>
                                <div class="mt-5 font-medium">Price</div>
                                <div class="leading-relaxed text-xs mt-2 text-slate-600 dark:text-slate-500">
                                    <div>The image format is .jpg .jpeg .png and a minimum size of 300 x 300 pixels (For optimal images use a minimum size of 700 x 700 pixels).</div>
                                    <div class="mt-2">Select product photos or drag and drop up to 5 photos at once here. Include min. 3 attractive photos to make the product more attractive to buyers.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
        </div>
   
    </div>
 
    <div data-url="side-menu-dark-dashboard-overview-3.html" class="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
        <div class="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
        <div class="dark-mode-switcher__toggle border"></div>
    </div>
  
   
   

</div>
  )
}

export default AddProduct