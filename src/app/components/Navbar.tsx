import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    
    return <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link
                    href={"/"}
                    className="flex z-40 font-semibold"
                >
                        Farm<span className="text-green-600">Store</span>
                </Link>

                <div className="h-full flex items-center space-x-4">
                {user ? (
                        <>
                            <Link 
                                href={"/api/auth/logout"} 
                                className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost"
                                })}
                            >
                                Sign out
                            </Link>
                            <Link 
                                href={"/find"} 
                                className={buttonVariants({
                                    size: "sm",
                                    className: "hidden sm:flex items-center gap-1"
                                })}
                            >
                                    Find store
                                <ArrowRight className="ml-1.5 h-5 w-5"/>
                            </Link>
                            </>
                        ) : (
                            <>
                            <Link 
                                href={"/api/auth/register"} 
                                className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost"
                                })}
                                >
                                    Sign up
                            </Link>
                            <Link 
                                href={"/api/auth/login"} 
                                className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost"
                                })}
                            >
                                Login
                            </Link>


                                <div 
                                    className="h-8 w-px bg-zinc-200 sm:block"
                                />

                            <Link 
                                href={"/find"} 
                                className={buttonVariants({
                                    size: "sm",
                                    className: "hidden sm:flex items-center gap-1"
                                })}
                            >
                                Find store
                                <ArrowRight className="ml-1.5 h-5 w-5"/>
                            </Link>
                            </>
                        )}
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
}

export default Navbar