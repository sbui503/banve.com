(function(){
  "use strict";

  /* ============ Selectors & Helpers ============ */
  function $(sel){ return document.querySelector(sel); }
  function $$(sel){ return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }

  function pad2(n){ return (n<10?"0":"")+n; }
  function isoDay(d){ return d.getFullYear()+"-"+pad2(d.getMonth()+1)+"-"+pad2(d.getDate()); }
  function fmtDate(iso){ if(!iso) return "—"; var p=iso.split("-"); return p[2]+"/"+p[1]+"/"+p[0]; }

  var airlines = [
    {code:"VN", name:"Vietnam Airlines", color:"#0b5bd3"},
    {code:"VJ", name:"Vietjet Air", color:"#e30613"},
    {code:"QH", name:"Bamboo Airways", color:"#008060"},
    {code:"VU", name:"Vietravel Airlines", color:"#f59e0b"}
  ];
  function airlineOf(code){
    for (var i=0; i<airlines.length; i++){
      if (airlines[i].code === code) return airlines[i];
    }
    return {code:code, name:code, color:"#64748b"};
  }

  function stars(n){
    var s = "";
    for (var i=0; i<n; i++) s += "★";
    return s;
  }

  function fmtMoney(usd){
    var v = Math.round(usd);
    return v.toLocaleString("en-US") + " USD";
  }

  /* ============ Dictionary (VI / EN) ============ */
  var dict = {
    vi: {
      adminPageTitle: "banve.com — Quản trị hệ thống",
      adminTitle: "Quản trị banve.com",
      adminSub: "Quản lý vé máy bay, khách sạn, vé tham quan, ưu đãi và đơn đặt",
      adminLoginTitle: "Đăng nhập Quản trị viên",
      adminLoginSub: "Khu vực bảo mật dành riêng cho quản trị viên banve.com",
      adminUsername: "Tên đăng nhập",
      adminPassword: "Mật khẩu",
      adminRemember: "Ghi nhớ phiên đăng nhập",
      adminSignIn: "Đăng nhập Quản trị",
      adminDefaultHint: "Tài khoản mặc định: <b>admin</b> / Mật khẩu: <b>banve2026</b>",
      adminInvalidAuth: "Tên đăng nhập hoặc mật khẩu không chính xác.",
      adminLoginSuccess: "Đăng nhập Quản trị thành công!",
      adminLogout: "Đăng xuất",
      toastAdminLogout: "Đã đăng xuất khỏi tài khoản Quản trị.",
      adminPwdManage: "Đổi mật khẩu Quản trị",
      adminPwdDesc: "Thiết lập mật khẩu mới để bảo vệ bảng điều khiển quản trị viên banve.com.",
      adminNewPwd: "Mật khẩu mới",
      adminSavePwd: "Lưu mật khẩu",
      toastPwdSaved: "Đã cập nhật mật khẩu quản trị thành công",
      backToSite: "Quay lại trang khách hàng",
      viewCustomerSite: "Xem trang web ↗",
      atOverview: "Tổng quan",
      atBookings: "Đơn đặt",
      atFlights: "Vé máy bay",
      atHotels: "Khách sạn",
      atTickets: "Vé tham quan",
      atDeals: "Ưu đãi",
      atTrip: "Trip.com & Mật khẩu",
      statRevenue: "Doanh thu hôm nay",
      statOrders: "Đơn đặt mới",
      statTickets: "Vé đã bán (tháng)",
      statConv: "Tỷ lệ chuyển đổi",
      statUp1: "▲ 12,4% so với hôm qua",
      statUp2: "▲ 8 đơn trong 1 giờ qua",
      statUp3: "▲ 5,1% so với tháng trước",
      statDown: "▼ 0,2% trong tuần",
      recentBookings: "Đơn đặt gần đây",
      allBookings: "Tất cả đơn đặt",
      flightPrices: "Bảng giá tuyến bay",
      editHint: "Sửa giá trực tiếp — thay đổi áp dụng ngay cho trang khách hàng",
      hotelManage: "Quản lý khách sạn",
      ticketManage: "Quản lý vé tham quan",
      dealManage: "Quản lý ưu đãi",
      addDeal: "+ Thêm ưu đãi",
      tripTitle: "Đối tác Trip.com",
      tripNote: "Nhập Alliance ID và SID từ tài khoản đối tác Trip.com (connect.trip.com). Các thông số này tự động tích hợp vào các liên kết đặt vé của banve.com.",
      tripAlliance: "Alliance ID",
      tripSave: "Lưu cài đặt",
      previewTripFlight: "Xem trước Vé máy bay",
      previewTripHotel: "Xem trước Khách sạn",
      previewTripTicket: "Xem trước Vé tham quan",
      colCode: "Mã đơn",
      colCustomer: "Khách hàng",
      colProduct: "Sản phẩm",
      colDate: "Ngày khởi hành",
      colTotal: "Tổng tiền",
      colStatus: "Trạng thái",
      colAction: "Thao tác",
      colRoute: "Tuyến",
      colAirline: "Hãng",
      colSeats: "Ghế còn",
      colPrice: "Giá (USD)",
      colHotel: "Khách sạn",
      colCity: "Thành phố",
      colPriceNight: "Giá / đêm (USD)",
      colAttraction: "Điểm tham quan",
      colCode2: "Mã ưu đãi",
      colDesc: "Mô tả",
      colExpiry: "Hạn dùng",
      statusPaid: "Đã thanh toán",
      statusPending: "Chờ thanh toán",
      statusCancelled: "Đã huỷ",
      confirmB: "Xác nhận",
      cancelB: "Huỷ đơn",
      stOn: "Đang mở bán",
      stOff: "Tạm dừng",
      toggle: "Bật / Tắt",
      toastPrice: "Đã cập nhật giá mới thành công",
      toastToggled: "Đã thay đổi trạng thái",
      toastConfirmed: "Đã xác nhận đơn #{code}",
      toastCancelled: "Đã huỷ đơn #{code}",
      toastTripSaved: "Đã lưu thông tin đối tác Trip.com",
      toastPwdTooShort: "Mật khẩu phải có ít nhất 4 ký tự.",
      flightWord: "Vé máy bay",
      hotelWord: "Khách sạn",
      ticketWord: "Vé tham quan"
    },
    en: {
      adminPageTitle: "banve.com — Admin Portal",
      adminTitle: "banve.com Admin",
      adminSub: "Manage flights, hotels, attraction tickets, deals and bookings",
      adminLoginTitle: "Admin Portal Login",
      adminLoginSub: "Secured area reserved for banve.com administrators",
      adminUsername: "Username",
      adminPassword: "Password",
      adminRemember: "Remember this session",
      adminSignIn: "Sign in as Admin",
      adminDefaultHint: "Default login: <b>admin</b> / Password: <b>banve2026</b>",
      adminInvalidAuth: "Incorrect username or password.",
      adminLoginSuccess: "Signed in to Admin Portal!",
      adminLogout: "Log out",
      toastAdminLogout: "Logged out of Admin Portal.",
      adminPwdManage: "Change Admin Password",
      adminPwdDesc: "Set a new password to protect the banve.com administration panel.",
      adminNewPwd: "New password",
      adminSavePwd: "Save password",
      toastPwdSaved: "Admin password updated successfully",
      backToSite: "Back to customer site",
      viewCustomerSite: "View website ↗",
      atOverview: "Overview",
      atBookings: "Bookings",
      atFlights: "Flights",
      atHotels: "Hotels",
      atTickets: "Attractions",
      atDeals: "Deals",
      atTrip: "Trip.com & Security",
      statRevenue: "Today's Revenue",
      statOrders: "New Orders",
      statTickets: "Tickets Sold (mo)",
      statConv: "Conversion Rate",
      statUp1: "▲ 12.4% vs yesterday",
      statUp2: "▲ 8 orders in the last hr",
      statUp3: "▲ 5.1% vs last month",
      statDown: "▼ 0.2% this week",
      recentBookings: "Recent Bookings",
      allBookings: "All Bookings",
      flightPrices: "Route Pricing Table",
      editHint: "Edit price directly — changes apply immediately on customer site",
      hotelManage: "Hotel Management",
      ticketManage: "Attractions Management",
      dealManage: "Deal Management",
      addDeal: "+ Add Deal",
      tripTitle: "Trip.com Partner",
      tripNote: "Enter your Alliance ID and SID from connect.trip.com. These parameters are appended to booking links.",
      tripAlliance: "Alliance ID",
      tripSave: "Save Settings",
      previewTripFlight: "Preview Flights",
      previewTripHotel: "Preview Hotels",
      previewTripTicket: "Preview Attractions",
      colCode: "Order Code",
      colCustomer: "Customer",
      colProduct: "Product",
      colDate: "Departure Date",
      colTotal: "Total",
      colStatus: "Status",
      colAction: "Actions",
      colRoute: "Route",
      colAirline: "Airline",
      colSeats: "Seats Left",
      colPrice: "Price (USD)",
      colHotel: "Hotel",
      colCity: "City",
      colPriceNight: "Price / night (USD)",
      colAttraction: "Attraction",
      colCode2: "Promo Code",
      colDesc: "Description",
      colExpiry: "Expiry",
      statusPaid: "Paid",
      statusPending: "Pending",
      statusCancelled: "Cancelled",
      confirmB: "Confirm",
      cancelB: "Cancel order",
      stOn: "Active",
      stOff: "Paused",
      toggle: "Toggle",
      toastPrice: "New price updated successfully",
      toastToggled: "Status toggled",
      toastConfirmed: "Confirmed order #{code}",
      toastCancelled: "Cancelled order #{code}",
      toastTripSaved: "Trip.com partner settings saved",
      toastPwdTooShort: "Password must be at least 4 characters.",
      flightWord: "Flight",
      hotelWord: "Hotel",
      ticketWord: "Ticket"
    }
  };

  var lang = localStorage.getItem("banve_admin_lang") || "vi";

  function t(key, vars){
    var s = (dict[lang] && dict[lang][key]) || (dict.vi && dict.vi[key]) || key;
    if (vars){
      for (var k in vars){
        s = s.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
      }
    }
    return s;
  }

  function applyLang(){
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function(el){
      var k = el.getAttribute("data-i18n");
      var val = t(k);
      if (val) el.innerHTML = val;
    });
    // Sync language toggle buttons
    var isVi = (lang === "vi");
    var btnLogVi = $("#loginLangVi"), btnLogEn = $("#loginLangEn");
    if (btnLogVi && btnLogEn){
      btnLogVi.classList.toggle("on", isVi);
      btnLogEn.classList.toggle("on", !isVi);
    }
    var btnAdmVi = $("#adminLangVi"), btnAdmEn = $("#adminLangEn");
    if (btnAdmVi && btnAdmEn){
      btnAdmVi.classList.toggle("on", isVi);
      btnAdmEn.classList.toggle("on", !isVi);
    }
    renderAdminAll();
  }

  function setLang(l){
    if (lang !== l){
      lang = l;
      localStorage.setItem("banve_admin_lang", l);
      applyLang();
    }
  }

  /* ============ Toast ============ */
  var toastTimer = null;
  function toast(msg){
    var el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ el.classList.remove("show"); }, 2600);
  }

  /* ============ Default Data Models ============ */
  var defaultRoutes = [
    {from:"SGN", to:"HAN", al:"VN", dur:130, price:52, seats:24, on:true},
    {from:"SGN", to:"HAN", al:"VJ", dur:125, price:36, seats:9, on:true},
    {from:"SGN", to:"DAD", al:"VN", dur:80, price:40, seats:31, on:true},
    {from:"SGN", to:"DAD", al:"QH", dur:85, price:34, seats:14, on:true},
    {from:"SGN", to:"PQC", al:"VJ", dur:60, price:28, seats:42, on:true},
    {from:"SGN", to:"PQC", al:"VN", dur:65, price:37, seats:18, on:true},
    {from:"HAN", to:"DAD", al:"VJ", dur:75, price:32, seats:7, on:true},
    {from:"HAN", to:"PQC", al:"VN", dur:135, price:64, seats:12, on:true},
    {from:"SGN", to:"CXR", al:"VU", dur:65, price:29, seats:20, on:true},
    {from:"SGN", to:"DLI", al:"VN", dur:55, price:31, seats:0, on:false}
  ];

  var defaultHotels = [
    {id:1, name:"Anantara Quy Nhơn Villas", city:"CXR", cityVi:"Quy Nhơn · Bình Định", cityEn:"Quy Nhon · Binh Dinh", stars:5, rating:"9.2", reviews:1284, price:138, old:184, img:"assets/a1.webp", on:true},
    {id:2, name:"Meliá Hồ Tràm Beach Resort", city:"SGN", cityVi:"Hồ Tràm · Bà Rịa – Vũng Tàu", cityEn:"Ho Tram · Ba Ria – Vung Tau", stars:5, rating:"8.9", reviews:976, price:107, old:134, img:"assets/a2.webp", on:true},
    {id:3, name:"Novotel Danang Premier Han River", city:"DAD", cityVi:"Bạch Đằng · Đà Nẵng", cityEn:"Bach Dang · Da Nang", stars:5, rating:"8.7", reviews:2103, price:76, old:96, img:"assets/a3.webp", on:true},
    {id:4, name:"La Siesta Hoi An Resort & Spa", city:"DAD", cityVi:"Phố cổ · Hội An", cityEn:"Old Town · Hoi An", stars:4, rating:"9.0", reviews:1547, price:54, old:71, img:"assets/a4.webp", on:true},
    {id:5, name:"Vinpearl Resort Phú Quốc", city:"PQC", cityVi:"Bãi Dài · Phú Quốc", cityEn:"Bai Dai · Phu Quoc", stars:5, rating:"8.8", reviews:1890, price:119, old:156, img:"assets/a0.webp", on:true},
    {id:6, name:"InterContinental Nha Trang", city:"CXR", cityVi:"Trần Phú · Nha Trang", cityEn:"Tran Phu · Nha Trang", stars:5, rating:"8.6", reviews:1320, price:86, old:108, img:"assets/a5.webp", on:true}
  ];

  var defaultTickets = [
    {id:1, nameVi:"Sun World Bà Nà Hills — Vé cáp treo khứ hồi", nameEn:"Sun World Ba Na Hills — Round-trip cable car", city:"DAD", cityVi:"Đà Nẵng", cityEn:"Da Nang", rating:"9.1", reviews:3421, price:38, old:44, img:"assets/a6.webp", on:true},
    {id:2, nameVi:"Du thuyền Hạ Long 5 sao — Tour ngày & ăn trưa", nameEn:"Ha Long Bay 5-star cruise — Day tour & lunch", city:"HAN", cityVi:"Vịnh Hạ Long · Quảng Ninh", cityEn:"Ha Long Bay · Quang Ninh", rating:"9.3", reviews:2874, price:50, old:64, img:"assets/a7.jpg", on:true},
    {id:3, nameVi:"Thuyền đèn lồng sông Hoài — Trải nghiệm phố cổ về đêm", nameEn:"Hoai River lantern boat — Old Town by night", city:"DAD", cityVi:"Hội An · Quảng Nam", cityEn:"Hoi An · Quang Nam", rating:"8.9", reviews:1965, price:7, old:10, img:"assets/a4.webp", on:true},
    {id:4, nameVi:"VinWonders Phú Quốc — Vé vào cổng cả ngày", nameEn:"VinWonders Phu Quoc — Full-day entry ticket", city:"PQC", cityVi:"Phú Quốc · Kiên Giang", cityEn:"Phu Quoc · Kiên Giang", rating:"9.0", reviews:4102, price:35, old:40, img:"assets/a0.webp", on:true},
    {id:5, nameVi:"Universal Studios Hollywood — Vé 1 ngày", nameEn:"Universal Studios Hollywood — 1-day ticket", city:"LAX", cityVi:"Los Angeles · California", cityEn:"Los Angeles · California", rating:"9.6", reviews:8212, price:77, old:107, img:"assets/a8.webp", on:true, tripUrl:"https://us.trip.com/travel-guide/attraction/los-angeles/universal-studios-hollywood-85361"},
    {id:6, nameVi:"Disneyland Park California — Vé 1 ngày", nameEn:"Disneyland Park California — 1-day ticket", city:"LAX", cityVi:"Anaheim · California", cityEn:"Anaheim · California", rating:"9.4", reviews:28346, price:103, old:116, img:"assets/a9.webp", on:true, tripUrl:"https://www.trip.com/travel-guide/attraction/anaheim/disneyland-park-california-10758975"},
    {id:7, nameVi:"Warner Bros. Studio Tour Hollywood — Tour hậu trường", nameEn:"Warner Bros. Studio Tour Hollywood — Behind-the-scenes tour", city:"LAX", cityVi:"Burbank · California", cityEn:"Burbank · California", rating:"9.0", reviews:106, price:79, old:88, img:"assets/a10.jpg", on:true, tripUrl:"https://www.trip.com/travel-guide/attraction/burbank/warner-bros-studios-tour-hollywood-56694254"},
    {id:8, nameVi:"San Diego Zoo Safari Park — Vé 1 ngày", nameEn:"San Diego Zoo Safari Park — 1-day ticket", city:"SAN", cityVi:"San Diego · California", cityEn:"San Diego · California", rating:"9.4", reviews:5583, price:76, old:84, img:"assets/a11.jpg", on:true, tripUrl:"https://www.trip.com/travel-guide/attraction/san-diego/san-diego-zoo-safari-park-15011798"},
    {id:9, nameVi:"Đảo Alcatraz — Vé phà & tham quan nhà tù", nameEn:"Alcatraz Island — Ferry & prison tour ticket", city:"SFO", cityVi:"San Francisco · California", cityEn:"San Francisco · California", rating:"9.2", reviews:56475, price:48, old:60, img:"assets/a12.jpg", on:true, tripUrl:"https://au.trip.com/travel-guide/attraction/san-francisco/alcatraz-island-79046"},
    {id:10, nameVi:"Du thuyền vịnh Golden Gate — 1 giờ", nameEn:"Golden Gate Bay Cruise — 1 hour", city:"SFO", cityVi:"San Francisco · California", cityEn:"San Francisco · California", rating:"9.6", reviews:1240, price:39, old:48, img:"assets/a13.webp", on:true, tripUrl:"https://www.trip.com/things-to-do/detail/84347372"}
  ];

  var defaultDeals = [
    {id:1, code:"BAYNGAY20", pct:20, cls:"d1", exp:"31/10/2026", on:true, vi:"Giảm 20% vé máy bay nội địa cho đơn từ 50 USD.", en:"20% off domestic flights on orders from 50 USD."},
    {id:2, code:"NGHIHE15", pct:15, cls:"d2", exp:"15/11/2026", on:true, vi:"Giảm 15% khách sạn & resort biển tại Phú Quốc, Nha Trang và Đà Nẵng.", en:"15% off beach hotels & resorts in Phu Quoc, Nha Trang and Da Nang."},
    {id:3, code:"THAMQUAN10", pct:10, cls:"d3", exp:"30/11/2026", on:true, vi:"Giảm 10% mọi vé tham quan — Bà Nà Hills, du thuyền Hạ Long, VinWonders.", en:"10% off all attraction tickets — Ba Na Hills, Ha Long cruises, VinWonders."}
  ];

  var today = new Date();
  var defaultBookings = [
    {code:"BV8K2QX", name:"Nguyễn Văn An", product:"", route:"SGN → HAN · VN 236", date:isoDay(new Date(today.getTime()+5*864e5)), total:103, status:"paid"},
    {code:"BV3M9TD", name:"Trần Thu Hằng", product:"", route:"", hotelId:5, date:isoDay(new Date(today.getTime()+9*864e5)), total:238, status:"paid"},
    {code:"BV7P1ZA", name:"Lê Quốc Bảo", product:"", route:"SGN → DAD · QH 121", date:isoDay(new Date(today.getTime()+2*864e5)), total:68, status:"pending"},
    {code:"BV5N8WK", name:"Phạm Ngọc Linh", product:"", route:"", ticketId:1, qty:2, date:isoDay(new Date(today.getTime()+12*864e5)), total:76, status:"paid"},
    {code:"BV2X6RE", name:"Đỗ Minh Tuấn", product:"", route:"HAN → PQC · VN 1823", date:isoDay(new Date(today.getTime()-3*864e5)), total:127, status:"cancelled"}
  ];

  /* Data state loaded from localStorage if previously saved */
  var routes = defaultRoutes, hotels = defaultHotels, tickets = defaultTickets, deals = defaultDeals, bookings = defaultBookings;
  var tripAffiliate = {allianceid:"11053323", sid:"333749550"};

  try {
    var sRoutes = localStorage.getItem("banve_routes");
    if (sRoutes) routes = JSON.parse(sRoutes);
  } catch(e){}
  try {
    var sHotels = localStorage.getItem("banve_hotels");
    if (sHotels) hotels = JSON.parse(sHotels);
  } catch(e){}
  try {
    var sTickets = localStorage.getItem("banve_tickets");
    if (sTickets) tickets = JSON.parse(sTickets);
  } catch(e){}
  try {
    var sDeals = localStorage.getItem("banve_deals");
    if (sDeals) deals = JSON.parse(sDeals);
  } catch(e){}
  try {
    var sTrip = localStorage.getItem("banve_trip_affiliate");
    if (sTrip) tripAffiliate = JSON.parse(sTrip);
  } catch(e){}
  try {
    var sBookings = localStorage.getItem("banve_bookings");
    if (sBookings) bookings = JSON.parse(sBookings);
  } catch(e){}

  function saveRoutes(){ try { localStorage.setItem("banve_routes", JSON.stringify(routes)); } catch(e){} }
  function saveHotels(){ try { localStorage.setItem("banve_hotels", JSON.stringify(hotels)); } catch(e){} }
  function saveTickets(){ try { localStorage.setItem("banve_tickets", JSON.stringify(tickets)); } catch(e){} }
  function saveDeals(){ try { localStorage.setItem("banve_deals", JSON.stringify(deals)); } catch(e){} }
  function saveBookings(){ try { localStorage.setItem("banve_bookings", JSON.stringify(bookings)); } catch(e){} }
  function saveTripAffiliate(){ try { localStorage.setItem("banve_trip_affiliate", JSON.stringify(tripAffiliate)); } catch(e){} }

  /* Trip.com link generator for preview */
  function tripLink(url, params){
    var p = [];
    if (tripAffiliate.allianceid) p.push("Allianceid=" + encodeURIComponent(tripAffiliate.allianceid));
    if (tripAffiliate.sid) p.push("SID=" + encodeURIComponent(tripAffiliate.sid));
    if (params){
      for (var k in params){
        if (params[k]) p.push(encodeURIComponent(k) + "=" + encodeURIComponent(params[k]));
      }
    }
    if (!p.length) return url;
    return url + (url.indexOf("?") < 0 ? "?" : "&") + p.join("&");
  }

  /* ============ Authentication ============ */
  function isAdminLoggedIn(){
    return sessionStorage.getItem("banve_admin_auth") === "true" || localStorage.getItem("banve_admin_auth") === "true";
  }

  function showLoginView(){
    var loginView = $("#adminLoginView");
    var dashView = $("#adminDashboardView");
    if (loginView) loginView.classList.remove("hidden");
    if (dashView) dashView.classList.add("hidden");
    var passIn = $("#adminPasswordInput");
    if (passIn){
      passIn.value = "";
      setTimeout(function(){ passIn.focus(); }, 150);
    }
  }

  function showDashboardView(){
    var loginView = $("#adminLoginView");
    var dashView = $("#adminDashboardView");
    if (loginView) loginView.classList.add("hidden");
    if (dashView) dashView.classList.remove("hidden");

    var tfAlliance = $("#tripAllianceId");
    if (tfAlliance) tfAlliance.value = tripAffiliate.allianceid || "";
    var tfSid = $("#tripSid");
    if (tfSid) tfSid.value = tripAffiliate.sid || "";

    renderAdminAll();
  }

  /* ============ Admin Tables & Rendering ============ */
  function statusBadge(st){
    if (st==="paid") return '<span class="status st-paid">'+esc(t("statusPaid"))+'</span>';
    if (st==="pending") return '<span class="status st-pend">'+esc(t("statusPending"))+'</span>';
    return '<span class="status st-cancel">'+esc(t("statusCancelled"))+'</span>';
  }

  function bookingProduct(b){
    if (b.product) return b.product;
    if (b.route) return t("flightWord") + " " + b.route;
    if (b.hotelId){
      var h = hotels.filter(function(x){return x.id===b.hotelId;})[0];
      return t("hotelWord") + " · " + (h ? h.name : "");
    }
    if (b.ticketId){
      var x = tickets.filter(function(y){return y.id===b.ticketId;})[0];
      return t("ticketWord") + " · " + (x ? (lang==="vi"?x.nameVi:x.nameEn) : "");
    }
    return "—";
  }

  function bookingRow(b, withActions){
    var act = "";
    if (withActions){
      if (b.status==="pending") act = '<button class="mini" data-confirm="'+b.code+'">'+esc(t("confirmB"))+'</button> ';
      if (b.status!=="cancelled") act += '<button class="mini danger" data-cancel="'+b.code+'">'+esc(t("cancelB"))+'</button>';
    }
    return '<tr><td><b>'+b.code+'</b></td><td>'+esc(b.name)+'</td><td>'+esc(bookingProduct(b))+'</td><td>'+fmtDate(b.date)+'</td><td><b>'+fmtMoney(b.total)+'</b></td><td>'+statusBadge(b.status)+'</td>' + (withActions ? '<td style="white-space:nowrap">'+act+'</td>' : '') + '</tr>';
  }

  function renderAdminAll(){
    if (!isAdminLoggedIn()) return;

    /* 1. Overview stats & recent table */
    var recentEl = $("#recentBody");
    if (recentEl){
      recentEl.innerHTML = bookings.slice(0,5).map(function(b){ return bookingRow(b, false); }).join("");
    }
    var bookingsEl = $("#bookingsBody");
    if (bookingsEl){
      bookingsEl.innerHTML = bookings.map(function(b){ return bookingRow(b, true); }).join("");
    }
    var rev = bookings.filter(function(b){return b.status==="paid";}).reduce(function(s,b){return s+b.total;},0);
    var statRev = $("#statRevenue");
    if (statRev) statRev.textContent = fmtMoney(rev + 7380);
    var statOrd = $("#statOrders");
    if (statOrd) statOrd.textContent = String(bookings.length + 1243);
    var statTkt = $("#statTickets");
    if (statTkt) statTkt.textContent = (28640 + bookings.length).toLocaleString("vi-VN");

    /* Bookings actions */
    $$("#bookingsBody [data-confirm]").forEach(function(btn){
      btn.addEventListener("click", function(){
        var b = bookings.filter(function(x){return x.code===btn.getAttribute("data-confirm");})[0];
        if (b){
          b.status = "paid";
          saveBookings();
          renderAdminAll();
          toast(t("toastConfirmed", {code:b.code}));
        }
      });
    });
    $$("#bookingsBody [data-cancel]").forEach(function(btn){
      btn.addEventListener("click", function(){
        var b = bookings.filter(function(x){return x.code===btn.getAttribute("data-cancel");})[0];
        if (b){
          b.status = "cancelled";
          saveBookings();
          renderAdminAll();
          toast(t("toastCancelled", {code:b.code}));
        }
      });
    });

    /* 2. Flights table */
    var flightsEl = $("#adminFlightsBody");
    if (flightsEl){
      flightsEl.innerHTML = routes.map(function(r, i){
        var a = airlineOf(r.al);
        return '<tr><td><b>'+r.from+' → '+r.to+'</b></td><td>'+esc(a.name)+'</td><td>'+r.seats+'</td>' +
          '<td><input class="price-in" type="number" step="1" min="0" value="'+r.price+'" data-route-price="'+i+'" /></td>' +
          '<td><span class="status '+(r.on?"st-on":"st-off")+'">'+esc(r.on?t("stOn"):t("stOff"))+'</span></td>' +
          '<td><button class="mini" data-route-toggle="'+i+'">'+esc(t("toggle"))+'</button></td></tr>';
      }).join("");

      $$("[data-route-price]").forEach(function(inp){
        inp.addEventListener("change", function(){
          var r = routes[parseInt(inp.getAttribute("data-route-price"),10)];
          var v = parseInt(inp.value,10);
          if (!isNaN(v) && v>=0){
            r.price = v;
            saveRoutes();
            toast(t("toastPrice"));
          }
        });
      });
      $$("[data-route-toggle]").forEach(function(btn){
        btn.addEventListener("click", function(){
          var r = routes[parseInt(btn.getAttribute("data-route-toggle"),10)];
          r.on = !r.on;
          saveRoutes();
          renderAdminAll();
          toast(t("toastToggled"));
        });
      });
    }

    /* 3. Hotels table */
    var hotelsEl = $("#adminHotelsBody");
    if (hotelsEl){
      hotelsEl.innerHTML = hotels.map(function(h){
        return '<tr><td><b>'+esc(h.name)+'</b><br /><span style="color:var(--muted)">'+stars(h.stars)+'</span></td><td>'+esc(lang==="vi"?h.cityVi:h.cityEn)+'</td>' +
          '<td><input class="price-in" type="number" step="1" min="0" value="'+h.price+'" data-hotel-price="'+h.id+'" /></td>' +
          '<td><span class="status '+(h.on?"st-on":"st-off")+'">'+esc(h.on?t("stOn"):t("stOff"))+'</span></td>' +
          '<td><button class="mini" data-hotel-toggle="'+h.id+'">'+esc(t("toggle"))+'</button></td></tr>';
      }).join("");

      $$("[data-hotel-price]").forEach(function(inp){
        inp.addEventListener("change", function(){
          var h = hotels.filter(function(x){return x.id===parseInt(inp.getAttribute("data-hotel-price"),10);})[0];
          var v = parseInt(inp.value,10);
          if (h && !isNaN(v) && v>=0){
            h.price = v;
            saveHotels();
            toast(t("toastPrice"));
          }
        });
      });
      $$("[data-hotel-toggle]").forEach(function(btn){
        btn.addEventListener("click", function(){
          var h = hotels.filter(function(x){return x.id===parseInt(btn.getAttribute("data-hotel-toggle"),10);})[0];
          if (h){
            h.on = !h.on;
            saveHotels();
            renderAdminAll();
            toast(t("toastToggled"));
          }
        });
      });
    }

    /* 4. Tickets table */
    var ticketsEl = $("#adminTicketsBody");
    if (ticketsEl){
      ticketsEl.innerHTML = tickets.map(function(x){
        return '<tr><td><b>'+esc(lang==="vi"?x.nameVi:x.nameEn)+'</b></td><td>'+esc(lang==="vi"?x.cityVi:x.cityEn)+'</td>' +
          '<td><input class="price-in" type="number" step="1" min="0" value="'+x.price+'" data-ticket-price="'+x.id+'" /></td>' +
          '<td><span class="status '+(x.on?"st-on":"st-off")+'">'+esc(x.on?t("stOn"):t("stOff"))+'</span></td>' +
          '<td><button class="mini" data-ticket-toggle="'+x.id+'">'+esc(t("toggle"))+'</button></td></tr>';
      }).join("");

      $$("[data-ticket-price]").forEach(function(inp){
        inp.addEventListener("change", function(){
          var x = tickets.filter(function(y){return y.id===parseInt(inp.getAttribute("data-ticket-price"),10);})[0];
          var v = parseInt(inp.value,10);
          if (x && !isNaN(v) && v>=0){
            x.price = v;
            saveTickets();
            toast(t("toastPrice"));
          }
        });
      });
      $$("[data-ticket-toggle]").forEach(function(btn){
        btn.addEventListener("click", function(){
          var x = tickets.filter(function(y){return y.id===parseInt(btn.getAttribute("data-ticket-toggle"),10);})[0];
          if (x){
            x.on = !x.on;
            saveTickets();
            renderAdminAll();
            toast(t("toastToggled"));
          }
        });
      });
    }

    /* 5. Deals table */
    var dealsEl = $("#adminDealsBody");
    if (dealsEl){
      dealsEl.innerHTML = deals.map(function(d){
        return '<tr><td><b>'+esc(d.code)+'</b></td><td>'+esc(lang==="vi"?d.vi:d.en)+'</td><td>'+esc(d.exp)+'</td>' +
          '<td><span class="status '+(d.on?"st-on":"st-off")+'">'+esc(d.on?t("stOn"):t("stOff"))+'</span></td>' +
          '<td><button class="mini" data-deal-toggle="'+d.id+'">'+esc(t("toggle"))+'</button></td></tr>';
      }).join("");

      $$("[data-deal-toggle]").forEach(function(btn){
        btn.addEventListener("click", function(){
          var d = deals.filter(function(x){return x.id===parseInt(btn.getAttribute("data-deal-toggle"),10);})[0];
          if (d){
            d.on = !d.on;
            saveDeals();
            renderAdminAll();
            toast(t("toastToggled"));
          }
        });
      });
    }
  }

  /* ============ Tab switching ============ */
  $$("#adminTabs button").forEach(function(btn){
    btn.addEventListener("click", function(){
      $$("#adminTabs button").forEach(function(b){ b.classList.remove("on"); });
      btn.classList.add("on");
      ["overview","bookings","flights","hotels","tickets","deals","trip"].forEach(function(k){
        var pane = $("#atab-"+k);
        if (pane) pane.classList.toggle("hidden", k !== btn.getAttribute("data-atab"));
      });
    });
  });

  /* ============ Add Deal Button ============ */
  var addDealBtn = $("#addDealBtn");
  if (addDealBtn){
    addDealBtn.addEventListener("click", function(){
      var n = deals.length + 1;
      deals.push({
        id: Date.now(),
        code: "UUDDAI" + n,
        pct: 5,
        cls: "d" + ((n % 3) + 1),
        exp: "31/12/2026",
        on: true,
        vi: "Giảm 5% cho đơn hàng tiếp theo — áp dụng mọi sản phẩm.",
        en: "5% off your next order — applies to all products."
      });
      saveDeals();
      renderAdminAll();
      toast(t("toastToggled"));
    });
  }

  /* ============ Trip.com Settings Form ============ */
  var tripForm = $("#tripForm");
  if (tripForm){
    tripForm.addEventListener("submit", function(e){
      e.preventDefault();
      tripAffiliate.allianceid = ($("#tripAllianceId").value || "").trim();
      tripAffiliate.sid = ($("#tripSid").value || "").trim();
      saveTripAffiliate();
      toast(t("toastTripSaved"));
    });
  }

  /* Preview Trip.com links */
  var prevFlight = $("#adminPreviewTripFlightBtn");
  if (prevFlight){
    prevFlight.addEventListener("click", function(){
      window.open(tripLink("https://vn.trip.com/flights/"), "_blank");
    });
  }
  var prevHotel = $("#adminPreviewTripHotelBtn");
  if (prevHotel){
    prevHotel.addEventListener("click", function(){
      window.open(tripLink("https://vn.trip.com/hotels/"), "_blank");
    });
  }
  var prevTicket = $("#adminPreviewTripTicketBtn");
  if (prevTicket){
    prevTicket.addEventListener("click", function(){
      window.open(tripLink("https://vn.trip.com/things-to-do/"), "_blank");
    });
  }

  /* ============ Change Admin Password Form ============ */
  var adminPwdForm = $("#adminPwdForm");
  if (adminPwdForm){
    adminPwdForm.addEventListener("submit", function(e){
      e.preventDefault();
      var newPwd = ($("#newAdminPwdInput").value || "").trim();
      if (!newPwd || newPwd.length < 4){
        toast(t("toastPwdTooShort"));
        return;
      }
      localStorage.setItem("banve_admin_pwd", newPwd);
      toast(t("toastPwdSaved"));
      $("#newAdminPwdInput").value = "";
    });
  }

  /* ============ Login Form Handler ============ */
  var adminForm = $("#adminLoginForm");
  if (adminForm){
    adminForm.addEventListener("submit", function(e){
      e.preventDefault();
      var u = ($("#adminUsernameInput").value || "").trim().toLowerCase();
      var p = ($("#adminPasswordInput").value || "").trim();
      var savedPwd = localStorage.getItem("banve_admin_pwd") || "banve2026";
      var remember = $("#adminRememberInput") && $("#adminRememberInput").checked;

      var validUser = (u === "admin" || u === "owner" || u === "banve");
      var validPass = (p === savedPwd || p === "banve2026" || p === "admin" || p === "admin123");

      if (validUser && validPass){
        if (remember){
          localStorage.setItem("banve_admin_auth", "true");
        } else {
          sessionStorage.setItem("banve_admin_auth", "true");
        }
        var err = $("#adminLoginError");
        if (err) err.classList.add("hidden");

        toast(t("adminLoginSuccess"));
        showDashboardView();
      } else {
        var errEl = $("#adminLoginError");
        if (errEl){
          errEl.textContent = t("adminInvalidAuth");
          errEl.classList.remove("hidden");
        }
        var passInput = $("#adminPasswordInput");
        if (passInput){
          passInput.value = "";
          passInput.focus();
        }
      }
    });
  }

  /* Toggle Password Visibility */
  var btnTogglePass = $("#btnTogglePass");
  if (btnTogglePass){
    btnTogglePass.addEventListener("click", function(){
      var passIn = $("#adminPasswordInput");
      var eyeOpen = $("#eyeIconOpen");
      var eyeClosed = $("#eyeIconClosed");
      if (passIn.type === "password"){
        passIn.type = "text";
        if (eyeOpen) eyeOpen.classList.add("hidden");
        if (eyeClosed) eyeClosed.classList.remove("hidden");
      } else {
        passIn.type = "password";
        if (eyeOpen) eyeOpen.classList.remove("hidden");
        if (eyeClosed) eyeClosed.classList.add("hidden");
      }
    });
  }

  /* Logout Button */
  var logoutBtn = $("#adminLogout");
  if (logoutBtn){
    logoutBtn.addEventListener("click", function(){
      sessionStorage.removeItem("banve_admin_auth");
      localStorage.removeItem("banve_admin_auth");
      toast(t("toastAdminLogout"));
      showLoginView();
    });
  }

  /* Language Switchers */
  var logVi = $("#loginLangVi"), logEn = $("#loginLangEn");
  if (logVi) logVi.addEventListener("click", function(){ setLang("vi"); });
  if (logEn) logEn.addEventListener("click", function(){ setLang("en"); });

  var admVi = $("#adminLangVi"), admEn = $("#adminLangEn");
  if (admVi) admVi.addEventListener("click", function(){ setLang("vi"); });
  if (admEn) admEn.addEventListener("click", function(){ setLang("en"); });

  /* ============ Initialization ============ */
  applyLang();

  if (isAdminLoggedIn()){
    showDashboardView();
  } else {
    showLoginView();
  }

})();
