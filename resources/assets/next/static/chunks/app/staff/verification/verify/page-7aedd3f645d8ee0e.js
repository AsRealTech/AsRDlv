(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [84], {
        5748: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 8098))
        },
        8098: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return page
                }
            });
            var a = t(7437),
                i = t(6691),
                l = t.n(i),
                n = t(8956),
                r = t(1827),
                c = t(7972),
                o = t(8004),
                x = t(2549),
                d = t(2265),
                components_Nav = () => {
                    let [e, s] = (0, d.useState)(!1), handleMenu = () => {
                        s(!e)
                    };
                    return (0, a.jsx)("nav", {
                        className: "bg-[#11172b] p-0",
                        children: (0, a.jsxs)("section", {
                            className: "lg:px-[10%] px-[2%] flex justify-between items-center ",
                            children: [(0, a.jsx)("aside", {
                                className: "flex lg:space-x-4 space-x-2",
                                children: (0, a.jsx)(l(), {
                                    width: 250,
                                    height: 200,
                                    src: "/logo.png",
                                    alt: "Logo",
                                    className: "cursor-pointer hover:scale-105 transition duration-200 ease-out transform lg:w-[250px] lg:h-[100px] w-[150px] h-[70px] object-contain "
                                })
                            }), (0, a.jsxs)("aside", {
                                className: "flex-col relative hidden lg:flex",
                                children: [(0, a.jsx)("section", {
                                    className: "relative",
                                    children: (0, a.jsxs)("ul", {
                                        className: "flex space-x-4 justify-end text-white",
                                        children: [(0, a.jsxs)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: [(0, a.jsx)(n.Z, {
                                                color: "white",
                                                size: 16
                                            }), (0, a.jsx)("span", {
                                                className: "text-xs",
                                                children: "English - United States $"
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: [(0, a.jsx)(r.Z, {
                                                color: "white",
                                                size: 16
                                            }), (0, a.jsx)("span", {
                                                className: "text-xs",
                                                children: "Search"
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: [(0, a.jsx)(c.Z, {
                                                color: "white",
                                                size: 16
                                            }), (0, a.jsx)("span", {
                                                className: "text-xs",
                                                children: "SIGN IN"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("section", {
                                    className: "relative mt-4",
                                    children: (0, a.jsxs)("ul", {
                                        className: "flex space-x-4 text-whitee",
                                        children: [(0, a.jsx)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: (0, a.jsx)("span", {
                                                className: "font-bold text-white",
                                                children: "BOOK"
                                            })
                                        }), (0, a.jsx)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: (0, a.jsx)("span", {
                                                className: "font-bold text-white",
                                                children: "MY TRIPS"
                                            })
                                        }), (0, a.jsx)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: (0, a.jsx)("span", {
                                                className: "font-bold text-white",
                                                children: "TRAVEL INFO"
                                            })
                                        }), (0, a.jsx)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: (0, a.jsx)("span", {
                                                className: "font-bold text-white",
                                                children: "MILEAGEPLUS \xaePROGRAMS"
                                            })
                                        }), (0, a.jsx)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: (0, a.jsx)("span", {
                                                className: "font-bold text-white",
                                                children: "DEALS"
                                            })
                                        }), (0, a.jsx)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: (0, a.jsx)("span", {
                                                className: "font-bold text-white",
                                                children: "HELP"
                                            })
                                        })]
                                    })
                                })]
                            }), (0, a.jsx)("aside", {
                                className: "flex lg:hidden",
                                children: (0, a.jsx)("button", {
                                    onClick: handleMenu,
                                    children: (0, a.jsx)(o.Z, {
                                        color: "white",
                                        size: 24
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: "".concat(e ? "block" : "hidden", " absolute top-0 left-0 w-full z-100 h-screen bg-black bg-opacity-90"),
                                children: [(0, a.jsx)("div", {
                                    className: "flex-col justify-end",
                                    children: (0, a.jsx)(x.Z, {
                                        color: "white",
                                        size: 24,
                                        onClick: handleMenu,
                                        className: "absolute top-4 right-4 cursor-pointer"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "flex flex-col h-screen pt-[68px] pl-[10px]",
                                    children: (0, a.jsxs)("ul", {
                                        className: "flex flex-col space-y-6 text-white",
                                        children: [(0, a.jsx)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: (0, a.jsx)("span", {
                                                className: "font-bold text-white",
                                                children: "BOOK"
                                            })
                                        }), (0, a.jsx)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: (0, a.jsx)("span", {
                                                className: "font-bold text-white",
                                                children: "MY TRIPS"
                                            })
                                        }), (0, a.jsx)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: (0, a.jsx)("span", {
                                                className: "font-bold text-white",
                                                children: "TRAVEL INFO"
                                            })
                                        }), (0, a.jsx)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: (0, a.jsx)("span", {
                                                className: "font-bold text-white",
                                                children: "MILEAGEPLUS \xaePROGRAMS"
                                            })
                                        }), (0, a.jsx)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: (0, a.jsx)("span", {
                                                className: "font-bold text-white",
                                                children: "DEALS"
                                            })
                                        }), (0, a.jsx)("li", {
                                            className: "text-white text-sm cursor-pointer flex space-x-1",
                                            children: (0, a.jsx)("span", {
                                                className: "font-bold text-white",
                                                children: "HELP"
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                h = t(756),
                m = t(3523),
                f = t(7042),
                p = t(4769);

            function cn() {
                for (var e = arguments.length, s = Array(e), t = 0; t < e; t++) s[t] = arguments[t];
                return (0, p.m6)((0, f.W)(s))
            }
            let u = h.fC,
                j = d.forwardRef((e, s) => {
                    let {
                        className: t,
                        ...i
                    } = e;
                    return (0, a.jsx)(h.ck, {
                        ref: s,
                        className: cn("border-b", t),
                        ...i
                    })
                });
            j.displayName = "AccordionItem";
            let N = d.forwardRef((e, s) => {
                let {
                    className: t,
                    children: i,
                    ...l
                } = e;
                return (0, a.jsx)(h.h4, {
                    className: "flex",
                    children: (0, a.jsxs)(h.xz, {
                        ref: s,
                        className: cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", t),
                        ...l,
                        children: [i, (0, a.jsx)(m.Z, {
                            className: "h-4 w-4 shrink-0 transition-transform duration-200"
                        })]
                    })
                })
            });
            N.displayName = h.xz.displayName;
            let b = d.forwardRef((e, s) => {
                let {
                    className: t,
                    children: i,
                    ...l
                } = e;
                return (0, a.jsx)(h.VY, {
                    ref: s,
                    className: cn("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", t),
                    ...l,
                    children: (0, a.jsx)("div", {
                        className: "pb-4 pt-0",
                        children: i
                    })
                })
            });
            b.displayName = h.VY.displayName;
            var components_FAQ = () => (0, a.jsxs)(u, {
                    type: "single",
                    collapsible: !0,
                    className: "w-full text-black",
                    children: [(0, a.jsxs)(j, {
                        value: "item-1",
                        children: [(0, a.jsx)(N, {
                            className: "text-black",
                            children: "Why is staff verification necessary?"
                        }), (0, a.jsx)(b, {
                            className: "text-black",
                            children: "Staff verification is crucial to ensure the safety and security of our passengers and maintain the integrity of our services. By verifying our staff members, we can guarantee a trustworthy and reliable travel experience for all our customers."
                        })]
                    }), (0, a.jsxs)(j, {
                        value: "item-2",
                        children: [(0, a.jsx)(N, {
                            className: "text-black",
                            children: "How does staff verification benefit Delta Airlines passengers?"
                        }), (0, a.jsx)(b, {
                            className: "text-black",
                            children: "Staff verification enhances passenger confidence in our airline by ensuring that only authorized and trained personnel are responsible for their safety and comfort during their journey with Delta Airlines."
                        })]
                    }), (0, a.jsxs)(j, {
                        value: "item-3",
                        children: [(0, a.jsx)(N, {
                            className: "text-black",
                            children: "What measures are taken during the staff verification process?"
                        }), (0, a.jsx)(b, {
                            className: "text-black",
                            children: "The staff verification process involves comprehensive background checks, credential validation, and regular training updates for our staff members. This stringent process guarantees that our team members meet the highest standards of professionalism and expertise."
                        })]
                    }), (0, a.jsxs)(j, {
                        value: "item-4",
                        children: [(0, a.jsx)(N, {
                            className: "text-black",
                            children: "How does staff verification contribute to Delta Airlines commitment to safety?"
                        }), (0, a.jsx)(b, {
                            className: "text-black",
                            children: "By implementing a rigorous staff verification process, we reinforce our commitment to upholding the highest safety standards in the aviation industry. This approach helps us maintain a secure environment for both our employees and passengers."
                        })]
                    }), (0, a.jsxs)(j, {
                        value: "item-5",
                        children: [(0, a.jsx)(N, {
                            className: "text-black",
                            children: "How does Delta Airlines ensure the integrity of the staff verification system?"
                        }), (0, a.jsx)(b, {
                            className: "text-black",
                            children: "Delta Airlines employs advanced technological solutions and strict protocols to ensure the integrity of our staff verification system. Regular audits and internal reviews are conducted to monitor and enhance the efficiency and reliability of our verification processes."
                        })]
                    }), (0, a.jsxs)(j, {
                        value: "item-6",
                        children: [(0, a.jsx)(N, {
                            className: "text-black",
                            children: "What role does staff verification play in preventing security breaches and fraudulent activities?"
                        }), (0, a.jsx)(b, {
                            className: "text-black",
                            children: "Staff verification acts as a vital deterrent to potential security breaches and fraudulent activities within the airline. By verifying our staff members, we mitigate the risk of unauthorized access and maintain a secure environment for our passengers and their belongings."
                        })]
                    })]
                }),
                components_Profile = () => (0, a.jsx)("div", {
                    className: "",
                    children: (0, a.jsxs)("div", {
                        className: "bg-white p-4 rounded-lg shadow-md",
                        children: [(0, a.jsxs)("div", {
                            className: "text-center",
                            children: [(0, a.jsx)(l(), {
                                src: "/client.jpeg",
                                alt: "Profile Image",
                                className: "w-60 h-80 object-cover mx-auto",
                                width: 128,
                                height: 128
                            }), (0, a.jsx)("h1", {
                                className: "text-3xl font-bold my-4",
                                children: "Peter Sandro"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "",
                            children: (0, a.jsxs)("div", {
                                className: "bg-white p-6 rounded-lg shadow-md text-black",
                                children: [(0, a.jsx)("h2", {
                                    className: "text-xl font-bold mb-2",
                                    children: "Personal Information:"
                                }), (0, a.jsx)("p", {
                                    children: "Full Name: Angelo Francis"
                                }), (0, a.jsx)("p", {
                                    children: "Contact Details: angelofrancis7481@gmail.com"
                                }), (0, a.jsx)("p", {
                                    children: "Address: 1348 Viridian park Ln , Arlington Tx 76005 , USA "
                                }), (0, a.jsx)("p", {
                                    children: "Date of Birth: February 6 1974 "
                                }), (0, a.jsx)("h2", {
                                    className: "text-xl font-bold mt-8 mb-2",
                                    children: "Work Information:"
                                }), (0, a.jsx)("p", {
                                    children: "Job Title: Airline pilot"
                                }), (0, a.jsx)("p", {
                                    children: "Employee ID: DA82673"
                                }), (0, a.jsx)("p", {
                                    children: "Reporting Manager: Luke Murphy, Ualukemurphy@gmail.com"
                                }), (0, a.jsx)("p", {
                                    children: "Work Location: Airport Location, Shift: Day Shift"
                                }), (0, a.jsx)("h2", {
                                    className: "text-xl font-bold mt-8 mb-2",
                                    children: "Credentials and Certifications:"
                                }), (0, a.jsx)("p", {
                                    children: "Educational Qualifications: Bachelor of Science in Aviation Technology"
                                }), (0, a.jsx)("p", {
                                    children: "Certifications: ATP certificate,ATPL"
                                }), (0, a.jsx)("p", {
                                    children: "Training Certifications: CPR certificate. Safety of protocol training"
                                }), (0, a.jsx)("h2", {
                                    className: "text-xl font-bold mt-8 mb-2",
                                    children: "Security Clearance and Background Check Information:"
                                }), (0, a.jsx)("p", {
                                    children: "Security Clearance Level: Level 3"
                                }), (0, a.jsx)("p", {
                                    children: "Background Check: Cleared"
                                }), (0, a.jsx)("h2", {
                                    className: "text-xl font-bold mt-8 mb-2",
                                    children: "Additional Information:"
                                }), (0, a.jsx)("p", {
                                    children: "Language Proficiency: English, Spanish, Italian"
                                }), (0, a.jsx)("p", {
                                    children: "Additional Skills: Conflict Resolution, First Aid"
                                }), (0, a.jsx)("p", {
                                    children: "Specialized Training: Crisis Management, First Aid, Conflict Resolution"
                                })]
                            })
                        })]
                    })
                }),
                g = t(1424),
                page = () => {
                    let [e, s] = (0, d.useState)(!1), [t, i] = (0, d.useState)(!1);
                    return (0, a.jsxs)("main", {
                        className: "bg-white",
                        children: [(0, a.jsx)(g.x, {
                            richColors: !0
                        }), (0, a.jsx)(components_Nav, {}), (0, a.jsxs)("div", {
                            className: "lg:px-[10%] px-[2%]",
                            children: [(0, a.jsx)("section", {
                                className: "mt-8",
                                children: (0, a.jsxs)("div", {
                                    className: "flex space-x-8 items-center",
                                    children: [(0, a.jsx)("h1", {
                                        className: "text-black lg:text-4xl font-bold",
                                        children: "Staff"
                                    }), (0, a.jsx)("span", {
                                        className: "text-gray-500",
                                        children: "All past and present staff of Delta Airlines"
                                    })]
                                })
                            }), (0, a.jsxs)("div", {
                                className: "mt-10 ".concat(e ? "hidden" : "block", " "),
                                children: [(0, a.jsxs)("section", {
                                    className: "border-2 border-[#11172b]",
                                    children: [(0, a.jsx)("div", {
                                        className: "bg-[#11172b] text-white p-4 flex items-center",
                                        children: "Find staff"
                                    }), (0, a.jsxs)("form", {
                                        className: "p-4",
                                        onSubmit: e => {
                                            e.preventDefault(), i(!0), setTimeout(() => {
                                                let t = e.target.staffId.value;
                                                if ("" === t) {
                                                    g.A.error("Please enter a staff ID"), i(!1);
                                                    return
                                                }
                                                if ("DA82673" !== t) {
                                                    g.A.error("Staff ID not found"), i(!1);
                                                    return
                                                }
                                                setTimeout(() => {
                                                    g.A.success("Staff ID found"), i(!1), s(!0)
                                                }, 5e3)
                                            }, 3e3)
                                        },
                                        children: [(0, a.jsxs)("div", {
                                            className: "",
                                            children: [(0, a.jsx)("label", {
                                                htmlFor: "staffId",
                                                className: "text-sm text-black",
                                                children: "Staff ID"
                                            }), (0, a.jsx)("input", {
                                                type: "text",
                                                name: "staffId",
                                                id: "staffId",
                                                className: "w-full border-2 rounded-md p-2 text-black"
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: " mt-6 ",
                                            children: (0, a.jsx)("button", {
                                                type: "submit",
                                                className: "bg-[#11172b] text-white p-4 rounded-md flex items-center text-black",
                                                children: t ? (0, a.jsxs)("div", {
                                                    className: "flex space-x-4",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "text-white",
                                                        children: "Loading..."
                                                    }), (0, a.jsxs)("svg", {
                                                        className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        children: [(0, a.jsx)("circle", {
                                                            className: "opacity-25",
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10",
                                                            stroke: "currentColor",
                                                            strokeWidth: "4"
                                                        }), (0, a.jsx)("path", {
                                                            className: "opacity-75",
                                                            fill: "currentColor",
                                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                        })]
                                                    })]
                                                }) : "Query staff"
                                            })
                                        })]
                                    })]
                                }), (0, a.jsxs)("section", {
                                    className: "mt-10",
                                    id: "faq",
                                    children: [(0, a.jsx)("h1", {
                                        className: "text-black text-4xl",
                                        children: "FAQs"
                                    }), (0, a.jsx)("br", {}), (0, a.jsx)(components_FAQ, {})]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "mt-6 ".concat(e ? "block" : "hidden", " "),
                                children: (0, a.jsx)(components_Profile, {})
                            })]
                        })]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [610, 971, 472, 744], function() {
            return e(e.s = 5748)
        }), _N_E = e.O()
    }
]);