import React from 'react'

function Sidenav() {
  return (
    <nav className="side-nav">
                <a href="" className="intro-x flex items-center pl-5 pt-4 mt-3">
                    <img alt="Midone - HTML Admin Template" className="w-6" src="dist/images/logo.svg"/>
                    <span className="hidden xl:block text-white text-lg ml-3"> SuperVision </span> 
                </a>
                <div className="side-nav__devider my-6"></div>
                <ul>
                    <li>
                        <a href="javascript:;.html" className="side-menu side-menu--active">
                            <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="side-menu__title">
                                Dashboard 
                                <div className="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="side-menu__sub-open">
                            
                           
                        </ul>
                    </li>
                   
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="shopping-bag"></i> </div>
                            <div className="side-menu__title">
                                E-Commerce 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-categories.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Categories </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-add-product.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Add Product </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title">
                                        Products 
                                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-light-product-list.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div className="side-menu__title">Product List</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-product-grid.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div className="side-menu__title">Product Grid</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title">
                                        Transactions 
                                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-light-transaction-list.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div className="side-menu__title">Transaction List</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-transaction-detail.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div className="side-menu__title">Transaction Detail</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title">
                                        Sellers 
                                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                    </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-light-seller-list.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div className="side-menu__title">Seller List</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-seller-detail.html" className="side-menu">
                                            <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                            <div className="side-menu__title">Seller Detail</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="side-menu-light-reviews.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                                    <div className="side-menu__title"> Reviews </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                  
                    
                </ul>
            </nav>
  )
}

export default Sidenav