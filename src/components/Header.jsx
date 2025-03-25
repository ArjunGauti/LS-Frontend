<header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo and Company Name - Left Side */}
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <Image 
                                    src="/images/Logo.jpg" 
                                    alt="Light and Sound Crackers Logo" 
                                    width={70}
                                    height={70}
                                    objectFit="contain"
                                />
                            </div>
                            <h1 className="text-xl font-bold">Light and Sound Crackers</h1>
                        </div>

                        {/* Cart and Account Icons - Right Side */}
                        <div className="flex items-center space-x-4">
                            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full">
                                <ShoppingCart className="h-6 w-6" />
                            </Link>
                            
                            <div className="relative">
                                <button 
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                    onClick={() => setShowLoginMenu(!showLoginMenu)}
                                >
                                    <User className="h-6 w-6" />
                                </button>
                                
                                {/* Login Dropdown Menu */}
                                {showLoginMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                        <Link href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                            Log in
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>