import React from 'react'
import Sidenav from '../components/sidenav'
function Home() {
  return (
  
    <div className="py-5 md:py-0 bg-black/[0.15] dark:bg-transparent">
        <div className="flex mt-[4.7rem] md:mt-0 overflow-hidden">
      <Sidenav/>
            <div className="content">
              
                <div className="top-bar -mx-4 px-4 md:mx-0 md:px-0">
                   
                    <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Application</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </nav>

                    <div className="intro-x relative mr-3 sm:mr-6">
                        <div className="search hidden sm:block">
                            <input type="text" className="search__input form-control border-transparent" placeholder="Search..."/>
                            <i data-lucide="search" className="search__icon dark:text-slate-500"></i> 
                        </div>
                        <a className="notification sm:hidden" href=""> <i data-lucide="search" className="notification__icon dark:text-slate-500"></i> </a>
                        <div className="search-result">
                            <div className="search-result__content">
                                <div className="search-result__content__title">Pages</div>
                                <div className="mb-5">
                                    <a href="" className="flex items-center">
                                        <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="inbox"></i> </div>
                                        <div className="ml-3">Mail Settings</div>
                                    </a>
                                    <a href="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="users"></i> </div>
                                        <div className="ml-3">Users & Permissions</div>
                                    </a>
                                    <a href="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="credit-card"></i> </div>
                                        <div className="ml-3">Transactions Report</div>
                                    </a>
                                </div>
                                <div className="search-result__content__title">Users</div>
                                <div className="mb-5">
                                    <a href="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 image-fit">
                                            <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-2.jpg"/>
                                        </div>
                                        <div className="ml-3">Keanu Reeves</div>
                                        <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">keanureeves@left4code.com</div>
                                    </a>
                                    <a href="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 image-fit">
                                            <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-3.jpg"/>
                                        </div>
                                        <div className="ml-3">Angelina Jolie</div>
                                        <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">angelinajolie@left4code.com</div>
                                    </a>
                                    <a href="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 image-fit">
                                            <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-13.jpg"/>
                                        </div>
                                        <div className="ml-3">Brad Pitt</div>
                                        <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">bradpitt@left4code.com</div>
                                    </a>
                                    <a href="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 image-fit">
                                            <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-4.jpg"/>
                                        </div>
                                        <div className="ml-3">John Travolta</div>
                                        <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">johntravolta@left4code.com</div>
                                    </a>
                                </div>
                                <div className="search-result__content__title">Products</div>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/preview-1.jpg"/>
                                    </div>
                                    <div className="ml-3">Apple MacBook Pro 13</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">PC &amp; Laptop</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/preview-7.jpg"/>
                                    </div>
                                    <div className="ml-3">Dell XPS 13</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">PC &amp; Laptop</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/preview-1.jpg"/>
                                    </div>
                                    <div className="ml-3">Samsung Galaxy S20 Ultra</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Smartphone &amp; Tablet</div>
                                </a>
                                <a href="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/preview-3.jpg"/>
                                    </div>
                                    <div className="ml-3">Apple MacBook Pro 13</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">PC &amp; Laptop</div>
                                </a>
                            </div>
                        </div>
                    </div>
                  
                    <div className="intro-x dropdown mr-auto sm:mr-6">
                        <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="bell" className="notification__icon dark:text-slate-500"></i> </div>
                        <div className="notification-content pt-2 dropdown-menu">
                            <div className="notification-content__box dropdown-content">
                                <div className="notification-content__title">Notifications</div>
                                <div className="cursor-pointer relative flex items-center ">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-2.jpg"/>
                                        <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a href="javascript:;" className="font-medium truncate mr-5">Keanu Reeves</a> 
                                            <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">05:09 AM</div>
                                        </div>
                                        <div className="w-full truncate text-slate-500 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-3.jpg"/>
                                        <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a href="javascript:;" className="font-medium truncate mr-5">Angelina Jolie</a> 
                                            <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">03:20 PM</div>
                                        </div>
                                        <div className="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-13.jpg"/>
                                        <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a href="javascript:;" className="font-medium truncate mr-5">Brad Pitt</a> 
                                            <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                        </div>
                                        <div className="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-4.jpg"/>
                                        <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a href="javascript:;" className="font-medium truncate mr-5">John Travolta</a> 
                                            <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">06:05 AM</div>
                                        </div>
                                        <div className="w-full truncate text-slate-500 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-15.jpg"/>
                                        <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                            <a href="javascript:;" className="font-medium truncate mr-5">Leonardo DiCaprio</a> 
                                            <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">05:09 AM</div>
                                        </div>
                                        <div className="w-full truncate text-slate-500 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="intro-x dropdown w-8 h-8">
                        <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in" role="button" aria-expanded="false" data-tw-toggle="dropdown">
                            <img alt="Midone - HTML Admin Template" src="dist/images/profile-5.jpg"/>
                        </div>
                        <div className="dropdown-menu w-56">
                            <ul className="dropdown-content bg-primary text-white">
                                <li className="p-2">
                                    <div className="font-medium">Keanu Reeves</div>
                                    <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">Backend Engineer</div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider border-white/[0.08]"/>
                                </li>
                                <li>
                                    <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="user" className="w-4 h-4 mr-2"></i> Profile </a>
                                </li>
                                <li>
                                    <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="edit" className="w-4 h-4 mr-2"></i> Add Account </a>
                                </li>
                                <li>
                                    <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="lock" className="w-4 h-4 mr-2"></i> Reset Password </a>
                                </li>
                                <li>
                                    <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="help-circle" className="w-4 h-4 mr-2"></i> Help </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider border-white/[0.08]"/>
                                </li>
                                <li>
                                    <a href="" className="dropdown-item hover:bg-white/5"> <i data-lucide="toggle-right" className="w-4 h-4 mr-2"></i> Logout </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                 
                </div>
            
                <div className="relative">
                </div>
                <div className="report-box-3 report-box-3--content grid grid-cols-12 gap-6 xl:-mt-5 2xl:-mt-8 -mb-10 z-40 2xl:z-10">
                    <div className="col-span-12 2xl:col-span-9">
                        <div className="grid grid-cols-12 gap-6">
                            
                           
                        
                            <div className="col-span-12 mt-6">
                                <div className="intro-y block sm:flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Weekly Top Products
                                    </h2>
                                    <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                                        <button className="btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" className="hidden sm:block w-4 h-4 mr-2"></i> Export to Excel </button>
                                        <button className="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" className="hidden sm:block w-4 h-4 mr-2"></i> Export to PDF </button>
                                    </div>
                                </div>
                                <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                    <table className="table table-report sm:mt-2">
                                        <thead>
                                            <tr>
                                                <th className="whitespace-nowrap">IMAGES</th>
                                                <th className="whitespace-nowrap">PRODUCT NAME</th>
                                                <th className="text-center whitespace-nowrap">STOCK</th>
                                                <th className="text-center whitespace-nowrap">STATUS</th>
                                                <th className="text-center whitespace-nowrap">ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="intro-x">
                                                <td className="w-40">
                                                    <div className="flex">
                                                        <div className="w-10 h-10 image-fit zoom-in">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 23 June 2020"/>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-2.jpg" title="Uploaded at 1 August 2022"/>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-9.jpg" title="Uploaded at 9 November 2022"/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="" className="font-medium whitespace-nowrap">Samsung Q90 QLED TV</a> 
                                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Electronic</div>
                                                </td>
                                                <td className="text-center">200</td>
                                                <td className="w-40">
                                                    <div className="flex items-center justify-center text-success"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active </div>
                                                </td>
                                                <td className="table-report__action w-56">
                                                    <div className="flex justify-center items-center">
                                                        <a className="flex items-center mr-3" href=""> <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                                        <a className="flex items-center text-danger" href=""> <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="intro-x">
                                                <td className="w-40">
                                                    <div className="flex">
                                                        <div className="w-10 h-10 image-fit zoom-in">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-15.jpg" title="Uploaded at 26 February 2022"/>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-11.jpg" title="Uploaded at 27 December 2021"/>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-2.jpg" title="Uploaded at 5 October 2020"/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="" className="font-medium whitespace-nowrap">Dell XPS 13</a> 
                                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">PC &amp; Laptop</div>
                                                </td>
                                                <td className="text-center">100</td>
                                                <td className="w-40">
                                                    <div className="flex items-center justify-center text-danger"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Inactive </div>
                                                </td>
                                                <td className="table-report__action w-56">
                                                    <div className="flex justify-center items-center">
                                                        <a className="flex items-center mr-3" href=""> <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                                        <a className="flex items-center text-danger" href=""> <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="intro-x">
                                                <td className="w-40">
                                                    <div className="flex">
                                                        <div className="w-10 h-10 image-fit zoom-in">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-15.jpg" title="Uploaded at 17 May 2022"/>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-8.jpg" title="Uploaded at 23 November 2022"/>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-1.jpg" title="Uploaded at 27 July 2020"/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="" className="font-medium whitespace-nowrap">Sony Master Series A9G</a> 
                                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Electronic</div>
                                                </td>
                                                <td className="text-center">118</td>
                                                <td className="w-40">
                                                    <div className="flex items-center justify-center text-danger"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Inactive </div>
                                                </td>
                                                <td className="table-report__action w-56">
                                                    <div className="flex justify-center items-center">
                                                        <a className="flex items-center mr-3" href=""> <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                                        <a className="flex items-center text-danger" href=""> <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="intro-x">
                                                <td className="w-40">
                                                    <div className="flex">
                                                        <div className="w-10 h-10 image-fit zoom-in">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-5.jpg" title="Uploaded at 12 February 2021"/>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-10.jpg" title="Uploaded at 29 October 2022"/>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-3.jpg" title="Uploaded at 15 August 2021"/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="" className="font-medium whitespace-nowrap">Oppo Find X2 Pro</a> 
                                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Smartphone &amp; Tablet</div>
                                                </td>
                                                <td className="text-center">142</td>
                                                <td className="w-40">
                                                    <div className="flex items-center justify-center text-success"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active </div>
                                                </td>
                                                <td className="table-report__action w-56">
                                                    <div className="flex justify-center items-center">
                                                        <a className="flex items-center mr-3" href=""> <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
                                                        <a className="flex items-center text-danger" href=""> <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                                    <nav className="w-full sm:w-auto sm:mr-auto">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-left"></i> </a>
                                            </li>
                                            <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                                            <li className="page-item"> <a className="page-link" href="#">1</a> </li>
                                            <li className="page-item active"> <a className="page-link" href="#">2</a> </li>
                                            <li className="page-item"> <a className="page-link" href="#">3</a> </li>
                                            <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-right"></i> </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <select className="w-20 form-select box mt-3 sm:mt-0">
                                        <option>10</option>
                                        <option>25</option>
                                        <option>35</option>
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                   
                </div>
            </div>
       
        </div>
     
        <div data-url="side-menu-dark-dashboard-overview-3.html" className="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
            <div className="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
            <div className="dark-mode-switcher__toggle border"></div>
        </div>
      
       
       
   
    </div>
   
  )
}

export default Home

