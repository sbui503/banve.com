
  (function(){
    "use strict";
    var $ = function(s, el){ return (el||document).querySelector(s); };
    var $$ = function(s, el){ return Array.prototype.slice.call((el||document).querySelectorAll(s)); };

    /* ============ i18n ============ */
    var I18N = {
      vi: {
        tagline:"Đặt vé dễ — đi đâu cũng rẻ", navFlights:"Vé máy bay", navHotels:"Khách sạn", navTickets:"Vé tham quan", navDeals:"Ưu đãi", admin:"Quản trị",
        heroTitle:'Bay khắp Việt Nam,<br /><span class="hl">giá tốt</span> mỗi ngày',
        heroSub:"So sánh vé máy bay, khách sạn và vé tham quan trên một nền tảng — đặt trong 2 phút, nhận vé điện tử ngay.",
        trust1:"Giá hiển thị là giá cuối", trust2:"Hỗ trợ tiếng Việt 24/7", trust3:"Hoàn / đổi vé linh hoạt",
        tabFlights:"Vé máy bay", tabHotels:"Khách sạn", tabTickets:"Vé tham quan",
        roundTrip:"Khứ hồi", oneWay:"Một chiều", from:"Điểm đi", to:"Điểm đến", depart:"Ngày đi", return:"Ngày về", pax:"Hành khách",
        searchFlights:"Tìm chuyến bay", destination:"Điểm đến", checkin:"Nhận phòng", checkout:"Trả phòng", rooms:"Phòng", guests:"Khách", searchHotels:"Tìm khách sạn",
        attraction:"Điểm tham quan", visitDate:"Ngày tham quan", ticketQty:"Số vé", searchTickets:"Tìm vé tham quan",
        sortBy:"Sắp xếp", sortPrice:"Giá thấp nhất", sortTime:"Giờ bay sớm nhất", sortDur:"Bay nhanh nhất",
        dealsTitle:"Ưu đãi hôm nay", dealsSub:"Mã giảm giá áp dụng khi thanh toán",
        destTitle:"Điểm đến được yêu thích", destSub:"Giá vé một chiều từ TP. Hồ Chí Minh",
        hotelsTitle:"Khách sạn nổi bật", hotelsSub:"Được khách đặt lại nhiều nhất tháng này",
        ticketsTitle:"Vé tham quan bán chạy", ticketsSub:"Vé điện tử — vào cổng bằng mã QR",
        navCa:"California", caTitle:"Điểm tham quan California", caSub:"Đặt vé qua Trip.com — đối tác của banve.com", bookTrip:"Đặt trên Trip.com",
        atTrip:"Trip.com", tripTitle:"Đối tác Trip.com",
        tripNote:"Nhập Alliance ID và SID từ tài khoản đối tác Trip.com (connect.trip.com). Có thể để trống và điền sau — khi chưa lưu SID, các nút đặt vé California sẽ mở trang Trip.com mà không kèm thông số theo dõi.",
        tripAlliance:"Alliance ID", tripSave:"Lưu cài đặt", toastTripSaved:"Đã lưu cài đặt Trip.com — link đặt vé đã được cập nhật",
        whyTitle:"Vì sao đặt tại banve.com?",
        why1t:"Giá minh bạch", why1d:"Giá bạn thấy là giá cuối cùng — đã gồm thuế, phí. Không phí ẩn ở bước thanh toán.",
        why2t:"Hỗ trợ 24/7", why2d:"Đội ngũ tiếng Việt sẵn sàng hỗ trợ đổi vé, hoàn vé và xử lý sự cố mọi lúc.",
        why3t:"Thanh toán an toàn", why3d:"Thẻ nội địa, thẻ quốc tế, ví điện tử và chuyển khoản — mã hoá theo chuẩn quốc tế.",
        why4t:"Hoàn / đổi linh hoạt", why4d:"Nhiều hạng vé cho phép đổi ngày miễn phí và hoàn tiền về ví trong 24 giờ.",
        footAbout:"Nền tảng đặt vé máy bay, khách sạn và vé tham quan cho người Việt — nhanh, minh bạch và tận tâm.",
        footProd:"Sản phẩm", footSupport:"Hỗ trợ", footHelp:"Trung tâm trợ giúp", footRefund:"Chính sách hoàn / đổi vé", footPay:"Hướng dẫn thanh toán", footFaq:"Câu hỏi thường gặp",
        footContact:"Liên hệ", footAddr:"TP. Hồ Chí Minh, Việt Nam", footNote:"Website demo — giá và tình trạng chỗ mang tính minh hoạ.",
        adminTitle:"Quản trị banve.com", adminSub:"Quản lý vé máy bay, khách sạn, vé tham quan, ưu đãi và đơn đặt", backToSite:"Quay lại trang khách hàng",
        atOverview:"Tổng quan", atBookings:"Đơn đặt", atFlights:"Vé máy bay", atHotels:"Khách sạn", atTickets:"Vé tham quan", atDeals:"Ưu đãi",
        statRevenue:"Doanh thu hôm nay", statOrders:"Đơn đặt mới", statTickets:"Vé đã bán (tháng)", statConv:"Tỷ lệ chuyển đổi",
        statUp1:"▲ 12,4% so với hôm qua", statUp2:"▲ 8 đơn trong 1 giờ qua", statUp3:"▲ 5,1% so với tháng trước", statDown:"▼ 0,2% trong tuần",
        recentBookings:"Đơn đặt gần đây", allBookings:"Tất cả đơn đặt",
        colCode:"Mã đơn", colCustomer:"Khách hàng", colProduct:"Sản phẩm", colDate:"Ngày khởi hành", colTotal:"Tổng tiền", colStatus:"Trạng thái", colAction:"Thao tác",
        flightPrices:"Bảng giá tuyến bay", editHint:"Sửa giá trực tiếp — thay đổi áp dụng ngay cho trang khách hàng",
        colRoute:"Tuyến", colAirline:"Hãng", colSeats:"Ghế còn", colPrice:"Giá (USD)",
        hotelManage:"Quản lý khách sạn", colHotel:"Khách sạn", colCity:"Thành phố", colPriceNight:"Giá / đêm (USD)",
        fxNote:"Tỷ giá quy đổi tham khảo (gần đúng): 1 USD ≈ 25.400 VND · 0,92 EUR · 1,52 AUD · 1,34 SGD · 7,24 CNY.",
        adminFxNote:"Giá gốc lưu bằng USD — trang khách hàng tự động quy đổi theo loại tiền tệ khách chọn.",
        ticketManage:"Quản lý vé tham quan", colAttraction:"Điểm tham quan",
        dealManage:"Quản lý ưu đãi", addDeal:"+ Thêm ưu đãi", colCode2:"Mã ưu đãi", colDesc:"Mô tả", colExpiry:"Hạn dùng",
        perPerson:"/ khách", perNight:"/ đêm", perTicket:"/ vé", bookNow:"Đặt ngay", choose:"Chọn",
        direct:"Bay thẳng", seatsLeft:"chỗ", onlySeats:"Chỉ còn {n} chỗ", useCode:"Dùng mã", copied:"Đã sao chép mã {code}",
        resultsFlights:"Chuyến bay {from} → {to}", resultsHotels:"Khách sạn tại {city}", resultsTickets:"Vé tham quan",
        foundN:"Tìm thấy {n} kết quả", nights:"{n} đêm", roomsGuests:"{r} phòng · {g} khách", ticketsQty:"{n} vé",
        bkTitle:"Xác nhận đặt chỗ", bkPassenger:"Họ tên hành khách", bkName:"Họ và tên", bkContact:"Thông tin liên hệ", bkEmail:"Email nhận vé", bkPhone:"Số điện thoại",
        bkTotal:"Tổng thanh toán", bkConfirm:"Xác nhận & thanh toán", bkSuccess:"Đặt chỗ thành công!",
        bkPnrLabel:"Mã đặt chỗ của bạn", bkSuccessNote:"Vé điện tử đã được gửi tới email của bạn. Vui lòng mang theo mã đặt chỗ khi làm thủ tục.",
        bkDone:"Hoàn tất",
        bkTripNote:"Sau khi bấm xác nhận, hệ thống sẽ mở cổng dịch vụ Trip.com để hoàn tất xuất vé & thanh toán bảo mật.",
        sendingToTrip:"Đang kết nối cổng dịch vụ Trip.com để hoàn tất đặt vé...", fillInfo:"Vui lòng nhập đầy đủ họ tên, email và số điện thoại.",
        saving:"Tiết kiệm {n}", statusPaid:"Đã thanh toán", statusPending:"Chờ thanh toán", statusCancelled:"Đã hủy",
        stOn:"Đang bán", stOff:"Tạm ngưng", toggle:"Bật/Tắt", confirmB:"Xác nhận", cancelB:"Huỷ đơn",
        toastCancelled:"Đã huỷ đơn {code}", toastConfirmed:"Đã xác nhận đơn {code}", toastPrice:"Đã cập nhật giá", toastToggled:"Đã cập nhật trạng thái hiển thị",
        flightWord:"Chuyến bay", hotelWord:"Khách sạn", ticketWord:"Vé tham quan", allPlaces:"Tất cả điểm tham quan",
        dealOff:"Giảm {n}%", flashSale:"Flash sale", reviews:"lượt đánh giá", fromPrice:"từ", sameCity:"Điểm đi và điểm đến không được trùng nhau.",
        navTripFlights:"Vé Trip.com ↗", bookTripFlights:"Đặt vé qua Trip.com (Mọi chuyến bay)", tripFlightHint:"Đặt mọi chặng bay nội địa & quốc tế với giá đại lý đối tác:",
        tripHotelHint:"Đặt phòng tại hơn 1.400.000 khách sạn toàn cầu với giá đối tác:", bookTripHotels:"Đặt khách sạn qua Trip.com (Toàn cầu)",
        tripTicketHint:"Đặt vé tham quan, tour & trải nghiệm vui chơi toàn cầu:", bookTripTickets:"Đặt vé tham quan qua Trip.com",
        tripModalTitle:"Cổng dịch vụ trực tuyến — Trip.com", tripModalTitleFlights:"Cổng đặt vé máy bay trực tuyến — Trip.com",
        tripModalTitleHotels:"Cổng đặt phòng khách sạn trực tuyến — Trip.com", tripModalTitleTickets:"Cổng vé tham quan & tour trải nghiệm — Trip.com",
        openInNewTab:"Mở trong tab mới ↗", tripIframeLoading:"Đang kết nối cổng dịch vụ Trip.com...",
        tripIframeFallback:"Nếu giao diện không tải do thiết lập bảo mật của trình duyệt, vui lòng", tripIframeClickHere:"Bấm vào đây để mở trực tiếp trên Trip.com ↗",
        tripSearchBanner:"Không tìm thấy chuyến bay mong muốn? Đặt mọi tuyến bay trên Trip.com", tripSearchBannerSub:"Đối tác chính thức của banve.com — xuất vé tức thì, kết nối hơn 5.000 hãng bay toàn cầu.", openTripPortal:"Mở cổng Trip.com ↗",
        tripSearchBannerHotels:"Tìm thêm lựa chọn khách sạn toàn cầu trên Trip.com", tripSearchBannerHotelsSub:"Hơn 1.400.000 khách sạn & resort với giá đại lý đối tác, xác nhận phòng tức thì.", openTripHotelPortal:"Mở cổng khách sạn Trip.com ↗",
        tripSearchBannerTickets:"Tìm thêm vé tham quan & hoạt động trên Trip.com", tripSearchBannerTicketsSub:"Vé công viên giải trí, bảo tàng, tour ngày và trải nghiệm tại hàng trăm điểm đến toàn cầu.", openTripTicketPortal:"Mở cổng vé tham quan Trip.com ↗",
        bookViaTrip:"Đặt qua Trip.com ↗", bookHotelTrip:"Đặt qua Trip.com ↗", bookTicketTrip:"Đặt qua Trip.com ↗",
        previewTripFlight:"Xem trước Vé máy bay", previewTripHotel:"Xem trước Khách sạn", previewTripTicket:"Xem trước Vé tham quan",
        cookieNotice:"Tránh lỗi chặn cookie trên Safari/iPhone: Nhấn nút để mở trực tiếp trên Trip.com.",
        openDirectTrip:"Mở trên Trip.com ↗",
        popularAirports:"Điểm đến phổ biến",
        vietnamAirports:"Sân bay Việt Nam",
        asiaAirports:"Châu Á & Thái Bình Dương",
        americaAirports:"Châu Mỹ (Mỹ & Canada)",
        europeAirports:"Châu Âu & Úc & Trung Đông",
        customSearchPrefix:"Tìm chuyến bay đến",
        allPlacesOption:"Tất cả điểm tham quan"
      },
      en: {
        tagline:"Easy booking — great prices everywhere", navFlights:"Flights", navHotels:"Hotels", navTickets:"Attraction tickets", navDeals:"Deals", admin:"Admin",
        heroTitle:'Fly all over Vietnam,<br /><span class="hl">great prices</span> every day',
        heroSub:"Compare flights, hotels and attraction tickets on one platform — book in 2 minutes, get your e-ticket instantly.",
        trust1:"The price you see is final", trust2:"24/7 support", trust3:"Flexible refunds & changes",
        tabFlights:"Flights", tabHotels:"Hotels", tabTickets:"Attraction tickets",
        roundTrip:"Round trip", oneWay:"One way", from:"From", to:"To", depart:"Departure", return:"Return", pax:"Passengers",
        searchFlights:"Search flights", destination:"Destination", checkin:"Check-in", checkout:"Check-out", rooms:"Rooms", guests:"Guests", searchHotels:"Search hotels",
        attraction:"Attraction", visitDate:"Visit date", ticketQty:"Tickets", searchTickets:"Search tickets",
        sortBy:"Sort", sortPrice:"Lowest price", sortTime:"Earliest departure", sortDur:"Shortest flight",
        dealsTitle:"Today's deals", dealsSub:"Promo codes applied at checkout",
        destTitle:"Loved destinations", destSub:"One-way fares from Ho Chi Minh City",
        hotelsTitle:"Featured hotels", hotelsSub:"Most re-booked this month",
        ticketsTitle:"Best-selling attraction tickets", ticketsSub:"E-tickets — enter with a QR code",
        navCa:"California", caTitle:"California attractions", caSub:"Booked via Trip.com — a banve.com partner", bookTrip:"Book on Trip.com",
        atTrip:"Trip.com", tripTitle:"Trip.com Affiliate",
        tripNote:"Enter the Alliance ID and SID from your Trip.com affiliate account (connect.trip.com). You can leave these blank and fill them in later — until a SID is saved, the California booking buttons open Trip.com without tracking parameters.",
        tripAlliance:"Alliance ID", tripSave:"Save settings", toastTripSaved:"Trip.com settings saved — booking links updated",
        whyTitle:"Why book with banve.com?",
        why1t:"Transparent pricing", why1d:"The price you see is the final price — taxes and fees included. No hidden charges at checkout.",
        why2t:"24/7 support", why2d:"Our team is ready around the clock to help with changes, refunds and travel issues.",
        why3t:"Secure payment", why3d:"Local and international cards, e-wallets and bank transfer — encrypted to international standards.",
        why4t:"Flexible refunds", why4d:"Many fare classes allow free date changes and wallet refunds within 24 hours.",
        footAbout:"A flight, hotel and attraction ticket platform for Vietnamese travelers — fast, transparent and caring.",
        footProd:"Products", footSupport:"Support", footHelp:"Help center", footRefund:"Refund & change policy", footPay:"Payment guide", footFaq:"FAQs",
        footContact:"Contact", footAddr:"Ho Chi Minh City, Vietnam", footNote:"Demo website — prices and availability are illustrative.",
        adminTitle:"banve.com Admin", adminSub:"Manage flights, hotels, attraction tickets, deals and bookings", backToSite:"Back to customer site",
        atOverview:"Overview", atBookings:"Bookings", atFlights:"Flights", atHotels:"Hotels", atTickets:"Attraction tickets", atDeals:"Deals",
        statRevenue:"Revenue today", statOrders:"New bookings", statTickets:"Tickets sold (month)", statConv:"Conversion rate",
        statUp1:"▲ 12.4% vs yesterday", statUp2:"▲ 8 in the last hour", statUp3:"▲ 5.1% vs last month", statDown:"▼ 0.2% this week",
        recentBookings:"Recent bookings", allBookings:"All bookings",
        colCode:"Booking code", colCustomer:"Customer", colProduct:"Product", colDate:"Travel date", colTotal:"Total", colStatus:"Status", colAction:"Action",
        flightPrices:"Route price table", editHint:"Edit prices inline — changes apply to the customer site instantly",
        colRoute:"Route", colAirline:"Airline", colSeats:"Seats left", colPrice:"Price (USD)",
        fxNote:"Approximate reference exchange rates: 1 USD ≈ 25,400 VND · 0.92 EUR · 1.52 AUD · 1.34 SGD · 7.24 CNY.",
        adminFxNote:"Base prices are stored in USD — the customer site converts automatically to the visitor's selected currency.",
        hotelManage:"Hotel management", colHotel:"Hotel", colCity:"City", colPriceNight:"Price / night (USD)",
        ticketManage:"Attraction ticket management", colAttraction:"Attraction",
        dealManage:"Deal management", addDeal:"+ Add deal", colCode2:"Promo code", colDesc:"Description", colExpiry:"Expires",
        perPerson:"/ person", perNight:"/ night", perTicket:"/ ticket", bookNow:"Book now", choose:"Select",
        direct:"Non-stop", seatsLeft:"seats", onlySeats:"Only {n} left", useCode:"Use code", copied:"Copied code {code}",
        resultsFlights:"Flights {from} → {to}", resultsHotels:"Hotels in {city}", resultsTickets:"Attraction tickets",
        foundN:"{n} results found", nights:"{n} night(s)", roomsGuests:"{r} room(s) · {g} guest(s)", ticketsQty:"{n} ticket(s)",
        bkTitle:"Confirm booking", bkPassenger:"Passenger name", bkName:"Full name", bkContact:"Contact details", bkEmail:"Email for e-ticket", bkPhone:"Phone number",
        bkTotal:"Total to pay", bkConfirm:"Confirm & pay", bkSuccess:"Booking successful!",
        bkPnrLabel:"Your booking code", bkSuccessNote:"Your e-ticket has been sent to your email. Please bring the booking code when you check in.",
        bkDone:"Done",
        bkTripNote:"After confirming, you will be directed to the secure Trip.com portal to complete ticketing & payment.",
        sendingToTrip:"Connecting to Trip.com to complete your booking...", fillInfo:"Please fill in your name, email and phone number.",
        saving:"Save {n}", statusPaid:"Paid", statusPending:"Pending payment", statusCancelled:"Cancelled",
        stOn:"On sale", stOff:"Paused", toggle:"Toggle", confirmB:"Confirm", cancelB:"Cancel",
        toastCancelled:"Booking {code} cancelled", toastConfirmed:"Booking {code} confirmed", toastPrice:"Price updated", toastToggled:"Visibility updated",
        flightWord:"Flight", hotelWord:"Hotel", ticketWord:"Attraction ticket", allPlaces:"All attractions",
        dealOff:"{n}% off", flashSale:"Flash sale", reviews:"reviews", fromPrice:"from", sameCity:"Origin and destination cannot be the same.",
        navTripFlights:"Trip.com Flights ↗", bookTripFlights:"Book on Trip.com (Any Global Flight)", tripFlightHint:"Book any domestic & international flight at partner wholesale rates:",
        tripHotelHint:"Book from 1,400,000+ hotels worldwide at partner rates:", bookTripHotels:"Book Hotels on Trip.com (Worldwide)",
        tripTicketHint:"Book attraction tickets, tours & activities worldwide:", bookTripTickets:"Book Tickets on Trip.com",
        tripModalTitle:"Online Service Portal — Trip.com", tripModalTitleFlights:"Online Flight Booking Portal — Trip.com",
        tripModalTitleHotels:"Online Hotel Booking Portal — Trip.com", tripModalTitleTickets:"Attraction & Tour Booking Portal — Trip.com",
        openInNewTab:"Open in new tab ↗", tripIframeLoading:"Connecting to Trip.com Portal...",
        tripIframeFallback:"If the page does not load due to browser security settings, please", tripIframeClickHere:"Click here to open directly on Trip.com ↗",
        tripSearchBanner:"Looking for more flight options? Book any flight worldwide on Trip.com", tripSearchBannerSub:"Official partner of banve.com — instant ticketing, 5,000+ global airlines.", openTripPortal:"Open Trip.com Portal ↗",
        tripSearchBannerHotels:"Looking for more hotel options? Search 1,400,000+ stays on Trip.com", tripSearchBannerHotelsSub:"Hotels, resorts and apartments worldwide — best partner price guarantee, instant confirmation.", openTripHotelPortal:"Open Trip.com Hotels ↗",
        tripSearchBannerTickets:"Explore more attraction tickets & tours on Trip.com", tripSearchBannerTicketsSub:"Theme parks, museum tickets, day tours and experiences across top global destinations.", openTripTicketPortal:"Open Trip.com Tickets ↗",
        bookViaTrip:"Book on Trip.com ↗", bookHotelTrip:"Book on Trip.com ↗", bookTicketTrip:"Book on Trip.com ↗",
        previewTripFlight:"Preview Flights", previewTripHotel:"Preview Hotels", previewTripTicket:"Preview Tickets",
        cookieNotice:"Avoid Safari/iPhone cookie blocks: Tap the button to open directly on Trip.com.",
        openDirectTrip:"Open on Trip.com ↗",
        popularAirports:"Popular Destinations",
        vietnamAirports:"Vietnam Airports",
        asiaAirports:"Asia & Pacific",
        americaAirports:"Americas (US & Canada)",
        europeAirports:"Europe, Australia & Middle East",
        customSearchPrefix:"Search flights to",
        allPlacesOption:"All attractions"
      }
    };
    var lang = "vi";
    function t(key, vars){
      var s = (I18N[lang] && I18N[lang][key]) || I18N.vi[key] || key;
      if (vars) Object.keys(vars).forEach(function(k){ s = s.replace("{"+k+"}", vars[k]); });
      return s;
    }
    function applyLang(){
      document.documentElement.lang = lang;
      $$("[data-i18n]").forEach(function(el){ el.textContent = t(el.getAttribute("data-i18n")); });
      $$("[data-i18n-html]").forEach(function(el){ el.innerHTML = t(el.getAttribute("data-i18n-html")); });
      $$("#sortSel option").forEach(function(o){ o.textContent = t(o.getAttribute("data-i18n")); });
      $("#langVi").classList.toggle("on", lang==="vi");
      $("#langEn").classList.toggle("on", lang==="en");
      fillCitySelects(); renderDeals(); renderDests(); renderHotels(); renderTickets(); renderCaTickets(); renderAdminAll();
      if (lastSearch) runSearch(lastSearch.kind, true);
    }

    /* ============ Data ============ */

    /* ============ Global Airports & Cities Database ============ */
    function removeDiacritics(str){
      return String(str || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    var AIRPORTS = [
      /* Vietnam Domestic */
      {code:"SGN", vi:"TP. Hồ Chí Minh", en:"Ho Chi Minh City", airportVi:"Sân bay Tân Sơn Nhất", airportEn:"Tan Son Nhat Intl", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"popular"},
      {code:"HAN", vi:"Hà Nội", en:"Hanoi", airportVi:"Sân bay Nội Bài", airportEn:"Noi Bai Intl", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"popular"},
      {code:"DAD", vi:"Đà Nẵng", en:"Da Nang", airportVi:"Sân bay Đà Nẵng", airportEn:"Da Nang Intl", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"popular"},
      {code:"PQC", vi:"Phú Quốc", en:"Phu Quoc", airportVi:"Sân bay Phú Quốc", airportEn:"Phu Quoc Intl", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"popular"},
      {code:"CXR", vi:"Nha Trang", en:"Nha Trang", airportVi:"Sân bay Cam Ranh", airportEn:"Cam Ranh Intl", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"popular"},
      {code:"HPH", vi:"Hải Phòng", en:"Hai Phong", airportVi:"Sân bay Cát Bi", airportEn:"Cat Bi Intl", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"HUI", vi:"Huế", en:"Hue", airportVi:"Sân bay Phú Bài", airportEn:"Phu Bai Intl", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"DLI", vi:"Đà Lạt", en:"Da Lat", airportVi:"Sân bay Liên Khương", airportEn:"Lien Khuong", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"VCA", vi:"Cần Thơ", en:"Can Tho", airportVi:"Sân bay Cần Thơ", airportEn:"Can Tho Intl", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"VII", vi:"Vinh", en:"Vinh", airportVi:"Sân bay Vinh", airportEn:"Vinh Airport", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"UIH", vi:"Quy Nhơn", en:"Quy Nhon", airportVi:"Sân bay Phù Cát", airportEn:"Phu Cat Airport", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"BMV", vi:"Buôn Ma Thuột", en:"Buon Ma Thuot", airportVi:"Sân bay Buôn Ma Thuột", airportEn:"Buon Ma Thuot", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"PXU", vi:"Pleiku", en:"Pleiku", airportVi:"Sân bay Pleiku", airportEn:"Pleiku Airport", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"TTH", vi:"Tuy Hòa", en:"Tuy Hoa", airportVi:"Sân bay Tuy Hòa", airportEn:"Tuy Hoa Airport", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"THD", vi:"Thanh Hóa", en:"Thanh Hoa", airportVi:"Sân bay Thọ Xuân", airportEn:"Tho Xuan Airport", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"VCL", vi:"Chu Lai", en:"Chu Lai", airportVi:"Sân bay Chu Lai", airportEn:"Chu Lai Airport", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"VDH", vi:"Đồng Hới", en:"Dong Hoi", airportVi:"Sân bay Đồng Hới", airportEn:"Dong Hoi Airport", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"DIN", vi:"Điện Biên Phủ", en:"Dien Bien Phu", airportVi:"Sân bay Điện Biên", airportEn:"Dien Bien Airport", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"VCS", vi:"Côn Đảo", en:"Con Dao", airportVi:"Sân bay Cỏ Ống", airportEn:"Con Dao Airport", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},
      {code:"VDO", vi:"Vân Đồn", en:"Van Don", airportVi:"Sân bay Quốc tế Vân Đồn", airportEn:"Van Don Intl", countryVi:"Việt Nam", countryEn:"Vietnam", cat:"vn"},

      /* Asia & Pacific */
      {code:"BKK", vi:"Bangkok", en:"Bangkok", airportVi:"Sân bay Suvarnabhumi", airportEn:"Suvarnabhumi Intl", countryVi:"Thái Lan", countryEn:"Thailand", cat:"asia"},
      {code:"DMK", vi:"Bangkok (Don Mueang)", en:"Bangkok (Don Mueang)", airportVi:"Sân bay Don Mueang", airportEn:"Don Mueang Intl", countryVi:"Thái Lan", countryEn:"Thailand", cat:"asia"},
      {code:"SIN", vi:"Singapore", en:"Singapore", airportVi:"Sân bay Changi", airportEn:"Singapore Changi", countryVi:"Singapore", countryEn:"Singapore", cat:"asia"},
      {code:"TYO", vi:"Tokyo (Tất cả)", en:"Tokyo (All Airports)", airportVi:"Haneda & Narita", airportEn:"Haneda & Narita", countryVi:"Nhật Bản", countryEn:"Japan", cat:"asia"},
      {code:"NRT", vi:"Tokyo (Narita)", en:"Tokyo (Narita)", airportVi:"Sân bay Quốc tế Narita", airportEn:"Narita Intl", countryVi:"Nhật Bản", countryEn:"Japan", cat:"asia"},
      {code:"HND", vi:"Tokyo (Haneda)", en:"Tokyo (Haneda)", airportVi:"Sân bay Quốc tế Haneda", airportEn:"Haneda Airport", countryVi:"Nhật Bản", countryEn:"Japan", cat:"asia"},
      {code:"KIX", vi:"Osaka (Kansai)", en:"Osaka (Kansai)", airportVi:"Sân bay Quốc tế Kansai", airportEn:"Kansai Intl", countryVi:"Nhật Bản", countryEn:"Japan", cat:"asia"},
      {code:"FUK", vi:"Fukuoka", en:"Fukuoka", airportVi:"Sân bay Fukuoka", airportEn:"Fukuoka Airport", countryVi:"Nhật Bản", countryEn:"Japan", cat:"asia"},
      {code:"SEL", vi:"Seoul (Tất cả)", en:"Seoul (All Airports)", airportVi:"Incheon & Gimpo", airportEn:"Incheon & Gimpo", countryVi:"Hàn Quốc", countryEn:"South Korea", cat:"asia"},
      {code:"ICN", vi:"Seoul (Incheon)", en:"Seoul (Incheon)", airportVi:"Sân bay Quốc tế Incheon", airportEn:"Incheon Intl", countryVi:"Hàn Quốc", countryEn:"South Korea", cat:"asia"},
      {code:"PUS", vi:"Busan", en:"Busan", airportVi:"Sân bay Quốc tế Gimhae", airportEn:"Gimhae Intl", countryVi:"Hàn Quốc", countryEn:"South Korea", cat:"asia"},
      {code:"TPE", vi:"Đài Bắc (Taoyuan)", en:"Taipei (Taoyuan)", airportVi:"Sân bay Đào Viên", airportEn:"Taoyuan Intl", countryVi:"Đài Loan", countryEn:"Taiwan", cat:"asia"},
      {code:"KHH", vi:"Cao Hùng", en:"Kaohsiung", airportVi:"Sân bay Cao Hùng", airportEn:"Kaohsiung Intl", countryVi:"Đài Loan", countryEn:"Taiwan", cat:"asia"},
      {code:"HKG", vi:"Hồng Kông", en:"Hong Kong", airportVi:"Sân bay Quốc tế Hồng Kông", airportEn:"Hong Kong Intl", countryVi:"Hồng Kông", countryEn:"Hong Kong", cat:"asia"},
      {code:"KUL", vi:"Kuala Lumpur", en:"Kuala Lumpur", airportVi:"Sân bay Quốc tế KLIA", airportEn:"Kuala Lumpur Intl", countryVi:"Malaysia", countryEn:"Malaysia", cat:"asia"},
      {code:"PEN", vi:"Penang", en:"Penang", airportVi:"Sân bay Quốc tế Penang", airportEn:"Penang Intl", countryVi:"Malaysia", countryEn:"Malaysia", cat:"asia"},
      {code:"MNL", vi:"Manila", en:"Manila", airportVi:"Sân bay Ninoy Aquino", airportEn:"Ninoy Aquino Intl", countryVi:"Philippines", countryEn:"Philippines", cat:"asia"},
      {code:"DPS", vi:"Bali (Denpasar)", en:"Bali (Denpasar)", airportVi:"Sân bay Ngurah Rai", airportEn:"Ngurah Rai Intl", countryVi:"Indonesia", countryEn:"Indonesia", cat:"asia"},
      {code:"PNH", vi:"Phnom Penh", en:"Phnom Penh", airportVi:"Sân bay Phnom Penh", airportEn:"Phnom Penh Intl", countryVi:"Campuchia", countryEn:"Cambodia", cat:"asia"},
      {code:"SAI", vi:"Siem Reap", en:"Siem Reap", airportVi:"Sân bay Siem Reap Angkor", airportEn:"Siem Reap Angkor", countryVi:"Campuchia", countryEn:"Cambodia", cat:"asia"},
      {code:"PEK", vi:"Bắc Kinh (Thủ đô)", en:"Beijing (Capital)", airportVi:"Sân bay Thủ Đô", airportEn:"Beijing Capital", countryVi:"Trung Quốc", countryEn:"China", cat:"asia"},
      {code:"PVG", vi:"Thượng Hải (Phố Đông)", en:"Shanghai (Pudong)", airportVi:"Sân bay Phố Đông", airportEn:"Pudong Intl", countryVi:"Trung Quốc", countryEn:"China", cat:"asia"},
      {code:"CAN", vi:"Quảng Châu", en:"Guangzhou", airportVi:"Sân bay Bạch Vân", airportEn:"Baiyun Intl", countryVi:"Trung Quốc", countryEn:"China", cat:"asia"},

      /* Americas */
      {code:"LAX", vi:"Los Angeles", en:"Los Angeles", airportVi:"Sân bay Quốc tế Los Angeles", airportEn:"Los Angeles Intl", countryVi:"Mỹ (California)", countryEn:"USA (California)", cat:"us"},
      {code:"SFO", vi:"San Francisco", en:"San Francisco", airportVi:"Sân bay Quốc tế San Francisco", airportEn:"San Francisco Intl", countryVi:"Mỹ (California)", countryEn:"USA (California)", cat:"us"},
      {code:"SJC", vi:"San Jose", en:"San Jose", airportVi:"Sân bay Mineta San Jose", airportEn:"Norman Y. Mineta San Jose", countryVi:"Mỹ (California)", countryEn:"USA (California)", cat:"us"},
      {code:"SAN", vi:"San Diego", en:"San Diego", airportVi:"Sân bay San Diego", airportEn:"San Diego Intl", countryVi:"Mỹ (California)", countryEn:"USA (California)", cat:"us"},
      {code:"JFK", vi:"New York (JFK)", en:"New York (JFK)", airportVi:"Sân bay John F. Kennedy", airportEn:"John F. Kennedy Intl", countryVi:"Mỹ (New York)", countryEn:"USA (New York)", cat:"us"},
      {code:"EWR", vi:"New York (Newark)", en:"New York (Newark)", airportVi:"Sân bay Newark Liberty", airportEn:"Newark Liberty", countryVi:"Mỹ (New Jersey)", countryEn:"USA (New Jersey)", cat:"us"},
      {code:"SEA", vi:"Seattle", en:"Seattle", airportVi:"Sân bay Seattle-Tacoma", airportEn:"Seattle-Tacoma Intl", countryVi:"Mỹ (Washington)", countryEn:"USA (Washington)", cat:"us"},
      {code:"ORD", vi:"Chicago (O'Hare)", en:"Chicago (O'Hare)", airportVi:"Sân bay O'Hare", airportEn:"O'Hare Intl", countryVi:"Mỹ (Illinois)", countryEn:"USA (Illinois)", cat:"us"},
      {code:"DFW", vi:"Dallas / Fort Worth", en:"Dallas / Fort Worth", airportVi:"Sân bay Dallas/Fort Worth", airportEn:"Dallas/Fort Worth", countryVi:"Mỹ (Texas)", countryEn:"USA (Texas)", cat:"us"},
      {code:"IAH", vi:"Houston", en:"Houston", airportVi:"Sân bay George Bush", airportEn:"George Bush Intercontinental", countryVi:"Mỹ (Texas)", countryEn:"USA (Texas)", cat:"us"},
      {code:"ATL", vi:"Atlanta", en:"Atlanta", airportVi:"Sân bay Hartsfield-Jackson", airportEn:"Hartsfield-Jackson", countryVi:"Mỹ (Georgia)", countryEn:"USA (Georgia)", cat:"us"},
      {code:"BOS", vi:"Boston", en:"Boston", airportVi:"Sân bay Logan", airportEn:"Logan Intl", countryVi:"Mỹ (Massachusetts)", countryEn:"USA (Massachusetts)", cat:"us"},
      {code:"IAD", vi:"Washington D.C. (Dulles)", en:"Washington D.C. (Dulles)", airportVi:"Sân bay Dulles", airportEn:"Washington Dulles", countryVi:"Mỹ", countryEn:"USA", cat:"us"},
      {code:"HNL", vi:"Honolulu (Hawaii)", en:"Honolulu (Hawaii)", airportVi:"Sân bay Daniel K. Inouye", airportEn:"Daniel K. Inouye Intl", countryVi:"Mỹ (Hawaii)", countryEn:"USA (Hawaii)", cat:"us"},
      {code:"YVR", vi:"Vancouver", en:"Vancouver", airportVi:"Sân bay Vancouver", airportEn:"Vancouver Intl", countryVi:"Canada", countryEn:"Canada", cat:"us"},
      {code:"YYZ", vi:"Toronto", en:"Toronto", airportVi:"Sân bay Pearson", airportEn:"Toronto Pearson", countryVi:"Canada", countryEn:"Canada", cat:"us"},

      /* Europe, Australia & Middle East */
      {code:"SYD", vi:"Sydney", en:"Sydney", airportVi:"Sân bay Kingsford Smith", airportEn:"Kingsford Smith", countryVi:"Úc", countryEn:"Australia", cat:"eu"},
      {code:"MEL", vi:"Melbourne", en:"Melbourne", airportVi:"Sân bay Melbourne", airportEn:"Melbourne Airport", countryVi:"Úc", countryEn:"Australia", cat:"eu"},
      {code:"BNE", vi:"Brisbane", en:"Brisbane", airportVi:"Sân bay Brisbane", airportEn:"Brisbane Airport", countryVi:"Úc", countryEn:"Australia", cat:"eu"},
      {code:"AKL", vi:"Auckland", en:"Auckland", airportVi:"Sân bay Auckland", airportEn:"Auckland Airport", countryVi:"New Zealand", countryEn:"New Zealand", cat:"eu"},
      {code:"CDG", vi:"Paris (Charles de Gaulle)", en:"Paris (Charles de Gaulle)", airportVi:"Sân bay Charles de Gaulle", airportEn:"Charles de Gaulle", countryVi:"Pháp", countryEn:"France", cat:"eu"},
      {code:"LHR", vi:"London (Heathrow)", en:"London (Heathrow)", airportVi:"Sân bay Heathrow", airportEn:"London Heathrow", countryVi:"Vương quốc Anh", countryEn:"United Kingdom", cat:"eu"},
      {code:"FRA", vi:"Frankfurt", en:"Frankfurt", airportVi:"Sân bay Frankfurt", airportEn:"Frankfurt Airport", countryVi:"Đức", countryEn:"Germany", cat:"eu"},
      {code:"AMS", vi:"Amsterdam", en:"Amsterdam", airportVi:"Sân bay Schiphol", airportEn:"Schiphol", countryVi:"Hà Lan", countryEn:"Netherlands", cat:"eu"},
      {code:"FCO", vi:"Rome", en:"Rome", airportVi:"Sân bay Fiumicino", airportEn:"Leonardo da Vinci Fiumicino", countryVi:"Ý", countryEn:"Italy", cat:"eu"},
      {code:"DXB", vi:"Dubai", en:"Dubai", airportVi:"Sân bay Quốc tế Dubai", airportEn:"Dubai Intl", countryVi:"UAE", countryEn:"UAE", cat:"eu"},
      {code:"DOH", vi:"Doha", en:"Doha", airportVi:"Sân bay Hamad", airportEn:"Hamad Intl", countryVi:"Qatar", countryEn:"Qatar", cat:"eu"},
      {code:"IST", vi:"Istanbul", en:"Istanbul", airportVi:"Sân bay Istanbul", airportEn:"Istanbul Airport", countryVi:"Thổ Nhĩ Kỳ", countryEn:"Turkey", cat:"eu"}
    ];

    function airportByCode(code){
      var c = (code || "").toUpperCase();
      for (var i=0; i<AIRPORTS.length; i++){
        if (AIRPORTS[i].code === c) return AIRPORTS[i];
      }
      return {code:c, vi:c, en:c, airportVi:"Sân bay "+c, airportEn:c+" Airport", countryVi:"Quốc tế", countryEn:"International"};
    }

    var CITIES = AIRPORTS;
    function cityName(c){ return lang==="vi" ? (c.vi || c.nameVi) : (c.en || c.nameEn); }
    function cityByCode(code){ return airportByCode(code); }

    var AIRLINES = [
      {code:"VN", name:"Vietnam Airlines", color:"#0b5bd3"},
      {code:"VJ", name:"Vietjet Air", color:"#e5231b"},
      {code:"QH", name:"Bamboo Airways", color:"#0e9f6e"},
      {code:"VU", name:"Vietravel Airlines", color:"#e8871a"},
      {code:"SQ", name:"Singapore Airlines", color:"#d4af37"},
      {code:"JL", name:"Japan Airlines", color:"#cc0000"},
      {code:"KE", name:"Korean Air", color:"#005a9c"},
      {code:"TG", name:"Thai Airways", color:"#4a154b"},
      {code:"CX", name:"Cathay Pacific", color:"#006564"},
      {code:"UA", name:"United Airlines", color:"#002244"},
      {code:"EK", name:"Emirates", color:"#d71921"},
      {code:"QR", name:"Qatar Airways", color:"#5c0632"}
    ];

    /* All prices below are stored in base USD; display conversion happens in fmtMoney() */
    var routes = [
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

    var hotels = [
      {id:1, name:"Anantara Quy Nhơn Villas", city:"CXR", cityVi:"Quy Nhơn · Bình Định", cityEn:"Quy Nhon · Binh Dinh", stars:5, rating:"9.2", reviews:1284, price:138, old:184, img:"assets/a1.webp", on:true},
      {id:2, name:"Meliá Hồ Tràm Beach Resort", city:"SGN", cityVi:"Hồ Tràm · Bà Rịa – Vũng Tàu", cityEn:"Ho Tram · Ba Ria – Vung Tau", stars:5, rating:"8.9", reviews:976, price:107, old:134, img:"assets/a2.webp", on:true},
      {id:3, name:"Novotel Danang Premier Han River", city:"DAD", cityVi:"Bạch Đằng · Đà Nẵng", cityEn:"Bach Dang · Da Nang", stars:5, rating:"8.7", reviews:2103, price:76, old:96, img:"assets/a3.webp", on:true},
      {id:4, name:"La Siesta Hoi An Resort & Spa", city:"DAD", cityVi:"Phố cổ · Hội An", cityEn:"Old Town · Hoi An", stars:4, rating:"9.0", reviews:1547, price:54, old:71, img:"assets/a4.webp", on:true},
      {id:5, name:"Vinpearl Resort Phú Quốc", city:"PQC", cityVi:"Bãi Dài · Phú Quốc", cityEn:"Bai Dai · Phu Quoc", stars:5, rating:"8.8", reviews:1890, price:119, old:156, img:"assets/a0.webp", on:true},
      {id:6, name:"InterContinental Nha Trang", city:"CXR", cityVi:"Trần Phú · Nha Trang", cityEn:"Tran Phu · Nha Trang", stars:5, rating:"8.6", reviews:1320, price:86, old:108, img:"assets/a5.webp", on:true}
    ];

    var tickets = [
      {id:1, nameVi:"Sun World Bà Nà Hills — Vé cáp treo khứ hồi", nameEn:"Sun World Ba Na Hills — Round-trip cable car", city:"DAD", cityVi:"Đà Nẵng", cityEn:"Da Nang", rating:"9.1", reviews:3421, price:38, old:44, img:"assets/a6.webp", on:true},
      {id:2, nameVi:"Du thuyền Hạ Long 5 sao — Tour ngày & ăn trưa", nameEn:"Ha Long Bay 5-star cruise — Day tour & lunch", city:"HAN", cityVi:"Vịnh Hạ Long · Quảng Ninh", cityEn:"Ha Long Bay · Quang Ninh", rating:"9.3", reviews:2874, price:50, old:64, img:"assets/a7.jpg", on:true},
      {id:3, nameVi:"Thuyền đèn lồng sông Hoài — Trải nghiệm phố cổ về đêm", nameEn:"Hoai River lantern boat — Old Town by night", city:"DAD", cityVi:"Hội An · Quảng Nam", cityEn:"Hoi An · Quang Nam", rating:"8.9", reviews:1965, price:7, old:10, img:"assets/a4.webp", on:true},
      {id:4, nameVi:"VinWonders Phú Quốc — Vé vào cổng cả ngày", nameEn:"VinWonders Phu Quoc — Full-day entry ticket", city:"PQC", cityVi:"Phú Quốc · Kiên Giang", cityEn:"Phu Quoc · Kien Giang", rating:"9.0", reviews:4102, price:35, old:40, img:"assets/a0.webp", on:true},
      {id:5, nameVi:"Universal Studios Hollywood — Vé 1 ngày", nameEn:"Universal Studios Hollywood — 1-day ticket", city:"LAX", cityVi:"Los Angeles · California", cityEn:"Los Angeles · California", rating:"9.6", reviews:8212, price:77, old:107, img:"assets/a8.webp", on:true, tripUrl:"https://us.trip.com/travel-guide/attraction/los-angeles/universal-studios-hollywood-85361"},
      {id:6, nameVi:"Disneyland Park California — Vé 1 ngày", nameEn:"Disneyland Park California — 1-day ticket", city:"LAX", cityVi:"Anaheim · California", cityEn:"Anaheim · California", rating:"9.4", reviews:28346, price:103, old:116, img:"assets/a9.webp", on:true, tripUrl:"https://www.trip.com/travel-guide/attraction/anaheim/disneyland-park-california-10758975"},
      {id:7, nameVi:"Warner Bros. Studio Tour Hollywood — Tour hậu trường", nameEn:"Warner Bros. Studio Tour Hollywood — Behind-the-scenes tour", city:"LAX", cityVi:"Burbank · California", cityEn:"Burbank · California", rating:"9.0", reviews:106, price:79, old:88, img:"assets/a10.jpg", on:true, tripUrl:"https://www.trip.com/travel-guide/attraction/burbank/warner-bros-studios-tour-hollywood-56694254"},
      {id:8, nameVi:"San Diego Zoo Safari Park — Vé 1 ngày", nameEn:"San Diego Zoo Safari Park — 1-day ticket", city:"SAN", cityVi:"San Diego · California", cityEn:"San Diego · California", rating:"9.4", reviews:5583, price:76, old:84, img:"assets/a11.jpg", on:true, tripUrl:"https://www.trip.com/travel-guide/attraction/san-diego/san-diego-zoo-safari-park-15011798"},
      {id:9, nameVi:"Đảo Alcatraz — Vé phà & tham quan nhà tù", nameEn:"Alcatraz Island — Ferry & prison tour ticket", city:"SFO", cityVi:"San Francisco · California", cityEn:"San Francisco · California", rating:"9.2", reviews:56475, price:48, old:60, img:"assets/a12.jpg", on:true, tripUrl:"https://au.trip.com/travel-guide/attraction/san-francisco/alcatraz-island-79046"},
      {id:10, nameVi:"Du thuyền vịnh Golden Gate — 1 giờ", nameEn:"Golden Gate Bay Cruise — 1 hour", city:"SFO", cityVi:"San Francisco · California", cityEn:"San Francisco · California", rating:"9.6", reviews:1240, price:39, old:48, img:"assets/a13.webp", on:true, tripUrl:"https://www.trip.com/things-to-do/detail/84347372"}
    ];

    /* Trip.com affiliate settings — filled in later from the admin panel; blank = links carry no tracking params */
    var tripAffiliate = {allianceid:"11053323", sid:"333749550"};
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

    function openTripPortal(type, customUrl){
      var baseUrls = {
        flights: "https://vn.trip.com/flights/",
        hotels: "https://vn.trip.com/hotels/",
        tickets: "https://vn.trip.com/things-to-do/"
      };
      var titles = {
        flights: t("tripModalTitleFlights"),
        hotels: t("tripModalTitleHotels"),
        tickets: t("tripModalTitleTickets")
      };
      var targetUrl = customUrl || tripLink(baseUrls[type] || baseUrls.flights, {
        locale: lang === "vi" ? "vi-VN" : "en-US",
        curr: currency
      });
      var modal = $("#tripModal");
      var iframe = $("#tripFlightIframe");
      var loading = $("#tripIframeLoading");
      var titleEl = $("#tripModalTitle");
      if (titleEl) titleEl.textContent = titles[type] || titles.flights;
      if (iframe){
        if (loading) loading.style.display = "flex";
        iframe.src = targetUrl;
        iframe.onload = function(){
          if (loading) loading.style.display = "none";
        };
      }
      if ($("#tripDirectLink")) $("#tripDirectLink").href = targetUrl;
      if ($("#tripFallbackLink")) $("#tripFallbackLink").href = targetUrl;
      if ($("#tripCookieDirectBtn")) $("#tripCookieDirectBtn").href = targetUrl;
      if (modal) modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
    function openTripFlightsModal(customUrl){ openTripPortal("flights", customUrl); }
    function openTripHotelsModal(customUrl){ openTripPortal("hotels", customUrl); }
    function openTripTicketsModal(customUrl){ openTripPortal("tickets", customUrl); }
    function closeTripFlightsModal(){
      var modal = $("#tripModal");
      if (modal) modal.classList.add("hidden");
      var iframe = $("#tripFlightIframe");
      if (iframe) iframe.src = "about:blank";
      document.body.style.overflow = "";
    }

    var deals = [
      {id:1, code:"BAYNGAY20", pct:20, cls:"d1", exp:"31/10/2026", on:true, vi:"Giảm 20% vé máy bay nội địa cho đơn từ {amt} — đặt cho các chuyến bay trong tháng 11.", en:"20% off domestic flights on orders from {amt} — for departures in November."},
      {id:2, code:"NGHIHE15", pct:15, cls:"d2", exp:"15/11/2026", on:true, vi:"Giảm 15% khách sạn & resort biển tại Phú Quốc, Nha Trang và Đà Nẵng.", en:"15% off beach hotels & resorts in Phu Quoc, Nha Trang and Da Nang."},
      {id:3, code:"THAMQUAN10", pct:10, cls:"d3", exp:"30/11/2026", on:true, vi:"Giảm 10% mọi vé tham quan — Bà Nà Hills, du thuyền Hạ Long, VinWonders và hơn nữa.", en:"10% off all attraction tickets — Ba Na Hills, Ha Long cruises, VinWonders and more."}
    ];

    var dests = [
      {code:"HAN", vi:"Vịnh Hạ Long", en:"Ha Long Bay", img:"assets/a14.jpg", alt:"Vịnh Hạ Long với những đảo đá vôi trên mặt nước xanh ngọc"},
      {code:"DAD", vi:"Đà Nẵng", en:"Da Nang", img:"assets/a3.webp", alt:"Cầu Rồng Đà Nẵng rực sáng về đêm bên sông Hàn"},
      {code:"DAD", vi:"Hội An", en:"Hoi An", img:"assets/a4.webp", alt:"Thuyền đèn lồng trên sông Hoài, phố cổ Hội An về đêm"},
      {code:"CXR", vi:"Nha Trang", en:"Nha Trang", img:"assets/a5.webp", alt:"Bãi biển Nha Trang cát trắng và hàng dừa"},
      {code:"PQC", vi:"Phú Quốc", en:"Phu Quoc", img:"assets/a0.webp", alt:"Bãi biển Phú Quốc với xích đu dưới hàng dừa"}
    ];

    function pad2(n){ return (n<10?"0":"")+n; }
    function isoDay(d){ return d.getFullYear()+"-"+pad2(d.getMonth()+1)+"-"+pad2(d.getDate()); }
    function fmtDate(iso){ if(!iso) return "—"; var p=iso.split("-"); return p[2]+"/"+p[1]+"/"+p[0]; }
    /* Currency display: stored prices are base USD; FX rates are approximate reference rates */
    var FX = {USD:1, VND:25400, EUR:0.92, AUD:1.52, SGD:1.34, CNY:7.24};
    var currency = "USD";
    function fmtMoney(usd){
      var rate = FX[currency] || 1;
      var v = usd * rate, str;
      if (currency === "VND"){ v = Math.round(v / 1000) * 1000; str = v.toLocaleString("vi-VN"); }
      else { v = Math.round(v); str = v.toLocaleString("en-US"); }
      return str + " " + currency;
    }
    function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }

    var today = new Date();
    var bookings = [
      {code:"BV8K2QX", name:"Nguyễn Văn An", product:"", route:"SGN → HAN · VN 236", date:isoDay(new Date(today.getTime()+5*864e5)), total:103, status:"paid"},
      {code:"BV3M9TD", name:"Trần Thu Hằng", product:"", route:"", hotelId:5, date:isoDay(new Date(today.getTime()+9*864e5)), total:238, status:"paid"},
      {code:"BV7P1ZA", name:"Lê Quốc Bảo", product:"", route:"SGN → DAD · QH 121", date:isoDay(new Date(today.getTime()+2*864e5)), total:68, status:"pending"},
      {code:"BV5N8WK", name:"Phạm Ngọc Linh", product:"", route:"", ticketId:1, qty:2, date:isoDay(new Date(today.getTime()+12*864e5)), total:76, status:"paid"},
      {code:"BV2X6RE", name:"Đỗ Minh Tuấn", product:"", route:"HAN → PQC · VN 1823", date:isoDay(new Date(today.getTime()-3*864e5)), total:127, status:"cancelled"}
    ];

    /* ============ Toast ============ */
    var toastTimer = null;
    function toast(msg){
      var el = $("#toast"); el.textContent = msg; el.classList.add("show");
      clearTimeout(toastTimer); toastTimer = setTimeout(function(){ el.classList.remove("show"); }, 2600);
    }

    /* ============ Search setup ============ */

    /* ============ Searchable Combobox Controller ============ */
    function setupCombobox(cfg){
      var wrap = $(cfg.wrapId), input = $(cfg.inputId), badge = $(cfg.badgeId), hidden = $(cfg.hiddenId), menu = $(cfg.menuId);
      if (!wrap || !input || !hidden || !menu) return;

      function renderItems(filterText){
        var q = removeDiacritics(filterText || "").trim();
        var matches = [];
        if (!q){
          matches = cfg.items.slice(0, 30);
        } else {
          matches = cfg.items.filter(function(item){
            var c = (item.code || "").toLowerCase();
            var nVi = removeDiacritics(item.vi || item.nameVi || "");
            var nEn = (item.en || item.nameEn || "").toLowerCase();
            var aVi = removeDiacritics(item.airportVi || "");
            var aEn = (item.airportEn || "").toLowerCase();
            var coVi = removeDiacritics(item.countryVi || "");
            var coEn = (item.countryEn || "").toLowerCase();
            return c.indexOf(q) >= 0 || nVi.indexOf(q) >= 0 || nEn.indexOf(q) >= 0 ||
                   aVi.indexOf(q) >= 0 || aEn.indexOf(q) >= 0 || coVi.indexOf(q) >= 0 || coEn.indexOf(q) >= 0;
          });
        }

        var html = "";
        if (matches.length > 0){
          var currentCat = "";
          matches.forEach(function(item){
            var catName = "";
            if (item.cat === "popular") catName = t("popularAirports");
            else if (item.cat === "vn") catName = t("vietnamAirports");
            else if (item.cat === "asia") catName = t("asiaAirports");
            else if (item.cat === "us") catName = t("americaAirports");
            else if (item.cat === "eu") catName = t("europeAirports");

            if (!q && catName && catName !== currentCat){
              html += '<div class="combo-cat-title">'+esc(catName)+'</div>';
              currentCat = catName;
            }

            var name = lang==="vi" ? (item.vi || item.nameVi) : (item.en || item.nameEn);
            var sub = (item.airportVi ? (lang==="vi"?item.airportVi:item.airportEn) + " · " : "") + (lang==="vi"?(item.countryVi||""):(item.countryEn||""));
            var activeClass = hidden.value === item.code ? " active" : "";
            html += '<div class="combo-item'+activeClass+'" data-code="'+esc(item.code)+'" data-name="'+esc(name)+'">' +
                      '<div class="ci-main"><div class="ci-city">'+esc(name)+'</div>' +
                      (sub ? '<div class="ci-sub">'+esc(sub)+'</div>' : '') +
                      '</div>' +
                      (item.code ? '<span class="ci-code">'+esc(item.code)+'</span>' : '') +
                    '</div>';
          });
        } else if (q) {
          var customCode = (q.length <= 4 ? q.toUpperCase() : q.slice(0,3).toUpperCase());
          html += '<div class="combo-item active" data-code="'+esc(customCode)+'" data-name="'+esc(filterText)+'">' +
                    '<div class="ci-main"><div class="ci-city">'+esc(t("customSearchPrefix"))+' "'+esc(filterText)+'"</div>' +
                    '<div class="ci-sub">Mở rộng tìm kiếm toàn cầu</div></div>' +
                    '<span class="ci-code">'+esc(customCode)+'</span>' +
                  '</div>';
        } else {
          html = '<div class="combo-empty">Nhập tên thành phố, quốc gia hoặc mã sân bay (VD: Tokyo, NRT, LAX, Seoul...)</div>';
        }
        menu.innerHTML = html;

        $$(cfg.menuId + " .combo-item").forEach(function(el){
          el.addEventListener("mousedown", function(e){
            e.preventDefault();
            selectItem(el.getAttribute("data-code"), el.getAttribute("data-name"));
          });
        });
      }

      function selectItem(code, name){
        hidden.value = code;
        input.value = name + (code ? " (" + code + ")" : "");
        if (badge) badge.textContent = code;
        menu.classList.add("hidden");
        if (cfg.onSelect) cfg.onSelect(code, name);
      }

      input.addEventListener("focus", function(){
        renderItems(input.value);
        menu.classList.remove("hidden");
        input.select();
      });
      input.addEventListener("input", function(){
        renderItems(input.value);
        menu.classList.remove("hidden");
      });
      input.addEventListener("keydown", function(e){
        if (e.key === "Enter"){
          e.preventDefault();
          var first = $(cfg.menuId + " .combo-item");
          if (first) {
            selectItem(first.getAttribute("data-code"), first.getAttribute("data-name"));
          } else if (input.value.trim()){
            var raw = input.value.trim();
            selectItem(raw.slice(0,3).toUpperCase(), raw);
          }
        } else if (e.key === "Escape"){
          menu.classList.add("hidden");
        }
      });

      document.addEventListener("click", function(e){
        if (!wrap.contains(e.target)) menu.classList.add("hidden");
      });

      // Initial set
      var initItem = airportByCode(cfg.defaultCode);
      if (initItem){
        var name = lang==="vi" ? (initItem.vi || initItem.nameVi) : (initItem.en || initItem.nameEn);
        selectItem(initItem.code, name);
      }
    }

    function fillCitySelects(){
      setupCombobox({
        wrapId: "#wrapFrom", inputId: "#fFromInput", badgeId: "#fFromBadge", hiddenId: "#fFrom", menuId: "#fFromMenu",
        items: AIRPORTS, defaultCode: $("#fFrom") ? $("#fFrom").value || "SGN" : "SGN"
      });
      setupCombobox({
        wrapId: "#wrapTo", inputId: "#fToInput", badgeId: "#fToBadge", hiddenId: "#fTo", menuId: "#fToMenu",
        items: AIRPORTS, defaultCode: $("#fTo") ? $("#fTo").value || "HAN" : "HAN"
      });
      setupCombobox({
        wrapId: "#wrapHotel", inputId: "#hCityInput", badgeId: "#hCityBadge", hiddenId: "#hCity", menuId: "#hCityMenu",
        items: AIRPORTS, defaultCode: $("#hCity") ? $("#hCity").value || "PQC" : "PQC"
      });

      var ticketItems = [{code:"all", vi:t("allPlacesOption"), en:t("allPlacesOption"), countryVi:"", countryEn:""}].concat(
        tickets.filter(function(x){return x.on;}).map(function(x){
          return {code:String(x.id), vi:x.nameVi, en:x.nameEn, countryVi:lang==="vi"?x.cityVi:x.cityEn, countryEn:lang==="vi"?x.cityVi:x.cityEn};
        })
      );
      setupCombobox({
        wrapId: "#wrapTicket", inputId: "#tPlaceInput", badgeId: null, hiddenId: "#tPlace", menuId: "#tPlaceMenu",
        items: ticketItems, defaultCode: "all"
      });
    }
    function setDates(){
      var d1 = new Date(today.getTime()+7*864e5), d2 = new Date(today.getTime()+10*864e5);
      ["fDepart","hIn","tDate"].forEach(function(id){ var el=document.getElementById(id); el.min = isoDay(today); el.value = isoDay(d1); });
      ["fReturn","hOut"].forEach(function(id){ var el=document.getElementById(id); el.min = isoDay(today); el.value = isoDay(d2); });
    }

    /* tabs */
    $$(".tabs button").forEach(function(btn){
      btn.addEventListener("click", function(){
        $$(".tabs button").forEach(function(b){ b.classList.remove("on"); });
        btn.classList.add("on");
        ["flights","hotels","tickets"].forEach(function(k){ $("#pane-"+k).classList.toggle("hidden", k!==btn.getAttribute("data-tab")); });
      });
    });
    function switchTab(k){
      $$(".tabs button").forEach(function(b){ b.classList.toggle("on", b.getAttribute("data-tab")===k); });
      ["flights","hotels","tickets"].forEach(function(x){ $("#pane-"+x).classList.toggle("hidden", x!==k); });
    }
    $("#swapBtn").addEventListener("click", function(){
      var fromCode = $("#fFrom").value, toCode = $("#fTo").value;
      var fromTxt = $("#fFromInput").value, toTxt = $("#fToInput").value;
      var fromBadge = $("#fFromBadge").textContent, toBadge = $("#fToBadge").textContent;
      $("#fFrom").value = toCode; $("#fTo").value = fromCode;
      $("#fFromInput").value = toTxt; $("#fToInput").value = fromTxt;
      $("#fFromBadge").textContent = toBadge; $("#fToBadge").textContent = fromBadge;
    });
    $$('input[name="trip"]').forEach(function(r){
      r.addEventListener("change", function(){
        var oneway = $('input[name="trip"]:checked').value === "oneway";
        $("#fReturn").disabled = oneway; $("#fReturn").style.opacity = oneway ? .45 : 1;
      });
    });

    /* ============ Flight generation ============ */
    function hashCode(s){ var h=0; for (var i=0;i<s.length;i++){ h=(h<<5)-h+s.charCodeAt(i); h|=0; } return Math.abs(h); }
    function flightNo(al, seed){ return al + " " + (100 + (seed % 880)); }
    function genFlights(from, to, dateIso){
      var base = routes.filter(function(r){ return r.from===from && r.to===to && r.on; });
      var list = [], used = {};
      base.forEach(function(r, i){
        var seed = hashCode(from+to+dateIso+r.al+i);
        var depH = 6 + (seed % 14), depM = (seed % 4) * 15;
        var arr = depH*60 + depM + r.dur;
        var vary = 1 + ((seed % 21) - 10) / 100;
        var price = Math.max(1, Math.round(r.price * vary));
        list.push({al:r.al, no:flightNo(r.al, seed), dep:depH*60+depM, arr:arr, dur:r.dur, price:price, old:Math.round(price*1.25), seats:Math.max(0, r.seats - (seed % 6)), routeIdx: routes.indexOf(r)});
        used[r.al] = true;
      });
      AIRLINES.forEach(function(a, i){
        if (used[a.code]) return;
        var seed = hashCode(from+to+dateIso+"x"+a.code);
        var r0 = base[0] || {dur:60 + (seed % 80), price:28 + (seed % 36)};
        var depH = 6 + (seed % 15), depM = (seed % 4) * 15;
        var price = Math.max(1, Math.round(r0.price * (0.92 + (seed % 30)/100)));
        list.push({al:a.code, no:flightNo(a.code, seed+7), dep:depH*60+depM, arr:depH*60+depM+r0.dur, dur:r0.dur, price:price, old:Math.round(price*1.3), seats:4 + (seed % 30), routeIdx:-1});
      });
      return list;
    }
    function fmtTime(mins){ var h = Math.floor(mins/60)%24, m = mins%60; return pad2(h)+":"+pad2(m); }
    function fmtDur(mins){ return Math.floor(mins/60) + "h " + pad2(mins%60) + "m"; }
    function airlineOf(code){ for (var i=0;i<AIRLINES.length;i++) if (AIRLINES[i].code===code) return AIRLINES[i]; return AIRLINES[0]; }

    /* ============ Rendering: customer ============ */
    function stars(n){ var s=""; for (var i=0;i<n;i++) s+="★"; return s; }
    function discountPct(old, now){ return Math.round((1 - now/old) * 100); }

    function renderDeals(){
      $("#dealGrid").innerHTML = deals.filter(function(d){return d.on;}).map(function(d){
        return '<div class="deal '+d.cls+'"><div class="off">-'+d.pct+'%</div><p>'+esc(lang==="vi"?d.vi:d.en).replace("{amt}", esc(fmtMoney(60)))+'</p>' +
          '<div class="code-row"><span class="code">'+esc(d.code)+'</span><button type="button" data-usecode="'+esc(d.code)+'">'+esc(t("useCode"))+'</button></div>' +
          '<span class="exp">HSD: '+esc(d.exp)+'</span></div>';
      }).join("");
      $$("[data-usecode]").forEach(function(b){
        b.addEventListener("click", function(){
          var code = b.getAttribute("data-usecode");
          if (navigator.clipboard) navigator.clipboard.writeText(code).catch(function(){});
          toast(t("copied", {code:code}));
        });
      });
    }

    function routeFromPrice(code){
      var best = null;
      routes.forEach(function(r){ if (r.to===code && r.from==="SGN" && r.on && (best===null || r.price<best)) best = r.price; });
      if (best===null) routes.forEach(function(r){ if (r.to===code && r.on && (best===null || r.price<best)) best = r.price; });
      return best;
    }
    function renderDests(){
      $("#destGrid").innerHTML = dests.map(function(d){
        var c = cityByCode(d.code), price = routeFromPrice(d.code), label = lang==="vi" ? d.vi : d.en;
        return '<button type="button" class="dest" data-dest="'+d.code+'"><img src="'+d.img+'" alt="'+esc(d.alt)+'" />' +
          (price ? '<span class="price">'+esc(t("fromPrice"))+' '+fmtMoney(price)+'</span>' : '') +
          '<span class="shade"></span><span class="info"><h3>'+esc(label)+'</h3><span>'+c.code+' · '+esc(t("flightWord"))+' SGN → '+d.code+'</span></span></button>';
      }).join("");
      $$("[data-dest]").forEach(function(b){
        b.addEventListener("click", function(){
          switchTab("flights");
          $("#fFrom").value = "SGN"; $("#fTo").value = b.getAttribute("data-dest");
          document.getElementById("tim-kiem").scrollIntoView({behavior:"smooth"});
          runSearch("flights");
        });
      });
    }

    function hotelCard(h){
      return '<article class="prod"><div class="ph"><img src="'+h.img+'" alt="'+esc(h.name)+'" /><span class="badge">-'+discountPct(h.old,h.price)+'%</span></div>' +
        '<div class="body"><div class="meta"><span class="stars">'+stars(h.stars)+'</span><span>'+esc(lang==="vi"?h.cityVi:h.cityEn)+'</span></div>' +
        '<h3>'+esc(h.name)+'</h3><div class="meta"><span class="rate">'+h.rating+'</span><span>'+h.reviews.toLocaleString("vi-VN")+' '+esc(t("reviews"))+'</span></div>' +
        '<div class="foot"><div class="price"><small>'+esc(t("perNight"))+'</small><span class="old">'+fmtMoney(h.old)+'</span><b>'+fmtMoney(h.price)+'</b></div>' +
        '<button type="button" data-book-hotel="'+h.id+'">'+esc(t("bookNow"))+'</button></div></div></article>';
    }
    function renderHotels(){ $("#hotelGrid").innerHTML = hotels.filter(function(h){return h.on;}).slice(0,3).map(hotelCard).join(""); bindBookButtons(); }

    function ticketCard(x){
      var name = lang==="vi" ? x.nameVi : x.nameEn;
      var action = x.tripUrl
        ? '<a class="book-trip" href="'+esc(tripLink(x.tripUrl))+'" target="_blank" rel="noopener sponsored" data-trip-ticket-url="'+esc(tripLink(x.tripUrl))+'">'+esc(t("bookTrip"))+'</a>'
        : '<button type="button" data-book-ticket="'+x.id+'">'+esc(t("bookNow"))+'</button>';
      return '<article class="prod"><div class="ph"><img src="'+x.img+'" alt="'+esc(name)+'" /><span class="badge">-'+discountPct(x.old,x.price)+'%</span></div>' +
        '<div class="body"><div class="meta"><span>'+esc(lang==="vi"?x.cityVi:x.cityEn)+'</span></div><h3>'+esc(name)+'</h3>' +
        '<div class="meta"><span class="rate">'+x.rating+'</span><span>'+x.reviews.toLocaleString("vi-VN")+' '+esc(t("reviews"))+'</span></div>' +
        '<div class="foot"><div class="price"><small>'+esc(t("perTicket"))+'</small><span class="old">'+fmtMoney(x.old)+'</span><b>'+fmtMoney(x.price)+'</b></div>' +
        action + '</div></div></article>';
    }
    function renderTickets(){ $("#ticketGrid").innerHTML = tickets.filter(function(x){return x.on;}).slice(0,3).map(ticketCard).join(""); bindBookButtons(); }
    function renderCaTickets(){ $("#caGrid").innerHTML = tickets.filter(function(x){return x.on && x.tripUrl;}).map(ticketCard).join(""); bindBookButtons(); }

    /* ============ Search results ============ */
    var lastSearch = null, lastResults = [];
    function showResults(title, sub){
      $("#results").classList.remove("hidden");
      $("#resTitle").textContent = title; $("#resSub").textContent = sub;
      $("#results").scrollIntoView({behavior:"smooth", block:"start"});
    }
    function flightCard(f, pax){
      var a = airlineOf(f.al);
      return '<div class="flight-card"><div class="airline"><span class="mark" style="background:'+a.color+'">'+f.al+'</span><span><b>'+esc(a.name)+'</b><span>'+esc(f.no)+'</span></span></div>' +
        '<div class="route-line"><div><div class="t">'+fmtTime(f.dep)+'</div><div class="c">'+lastSearch.from+'</div></div>' +
        '<div class="mid"><span>'+fmtDur(f.dur)+' · '+esc(t("direct"))+'</span><div class="line"></div>' +
        (f.seats>0 && f.seats<=10 ? '<span class="tag hot">'+esc(t("onlySeats",{n:f.seats}))+'</span>' : '<span class="tag">'+f.seats+' '+esc(t("seatsLeft"))+'</span>') +
        '</div><div style="text-align:right"><div class="t">'+fmtTime(f.arr)+'</div><div class="c">'+lastSearch.to+'</div></div></div>' +
        '<div class="buy"><div class="old">'+fmtMoney(f.old*pax)+'</div><div class="now">'+fmtMoney(f.price*pax)+'</div><div class="per">'+pax+' '+esc(t("pax").toLowerCase())+' · '+esc(t("saving",{n:fmtMoney((f.old-f.price)*pax)}))+'</div>' +
        '<button type="button" data-book-flight="'+f.no+'|'+f.al+'|'+f.dep+'|'+f.arr+'|'+f.price+'">'+esc(t("choose"))+'</button></div></div>';
    }
    function sortFlights(list, mode){
      var arr = list.slice();
      if (mode==="price") arr.sort(function(a,b){ return a.price-b.price; });
      if (mode==="time") arr.sort(function(a,b){ return a.dep-b.dep; });
      if (mode==="duration") arr.sort(function(a,b){ return a.dur-b.dur; });
      return arr;
    }
    function runSearch(kind, keepScroll){
      lastSearch = {kind:kind};
      var listEl = $("#resList");
      if (kind==="flights"){
        var from = ($("#fFrom").value || "SGN").toUpperCase();
        var to = ($("#fTo").value || "HAN").toUpperCase();
        var date = $("#fDepart").value;
        var pax = parseInt($("#fPax").value,10);
        var round = $('input[name="trip"]:checked').value === "round";
        var rdate = $("#fReturn").value;

        if (from===to){ toast(t("sameCity")); return; }
        lastSearch.from = from; lastSearch.to = to; lastSearch.date = date; lastSearch.pax = pax;

        // Build Trip.com Flight search URL for showfarefirst
        var tripFlightUrl = "https://vn.trip.com/flights/showfarefirst?dcity=" + from.toLowerCase() + "&acity=" + to.toLowerCase() + "&ddate=" + date + (round && rdate ? "&rdate=" + rdate : "") + "&quantity=" + pax + "&curr=" + currency;
        lastSearch.tripUrl = tripLink(tripFlightUrl);

        lastResults = sortFlights(genFlights(from, to, date), $("#sortSel").value);
        $("#sortSel").disabled = false;
        var fromObj = cityByCode(from), toObj = cityByCode(to);
        var fromName = cityName(fromObj), toName = cityName(toObj);

        var bannerHtml = '<div class="trip-search-banner"><div class="t-text"><strong>Tìm tất cả chuyến bay ' + esc(fromName) + ' (' + from + ') → ' + esc(toName) + ' (' + to + ') trên Trip.com</strong><p>So sánh giá vé trực tiếp từ 5.000+ hãng hàng không toàn cầu với giá đối tác tốt nhất.</p></div><button type="button" class="btn-trip-banner" id="bannerTripFlightBtn">Đặt vé ' + from + ' → ' + to + ' trên Trip.com ↗</button></div>';
        listEl.innerHTML = bannerHtml + lastResults.map(function(f){ return flightCard(f, pax); }).join("");
        showResults(t("resultsFlights",{from:fromName, to:toName}), fmtDate(date) + " · " + t("foundN",{n:lastResults.length}));
      } else if (kind==="hotels"){
        var city = $("#hCity").value, ci = $("#hIn").value, co = $("#hOut").value;
        var nights = Math.max(1, Math.round((new Date(co) - new Date(ci)) / 864e5));
        var rooms = parseInt($("#hRooms").value,10), guests = parseInt($("#hGuests").value,10);
        lastSearch.city = city; lastSearch.nights = nights; lastSearch.rooms = rooms; lastSearch.date = ci;
        var found = hotels.filter(function(h){ return h.on && h.city===city; });
        if (!found.length) found = hotels.filter(function(h){ return h.on; });
        lastResults = found;
        $("#sortSel").disabled = true;
        var hotelBannerHtml = '<div class="trip-search-banner"><div class="t-text"><strong data-i18n="tripSearchBannerHotels">'+esc(t("tripSearchBannerHotels"))+'</strong><p data-i18n="tripSearchBannerHotelsSub">'+esc(t("tripSearchBannerHotelsSub"))+'</p></div><button type="button" class="btn-trip-banner" id="bannerTripHotelBtn" data-i18n="openTripHotelPortal">'+esc(t("openTripHotelPortal"))+'</button></div>';
        listEl.innerHTML = hotelBannerHtml + found.map(hotelCard).join("");
        showResults(t("resultsHotels",{city:cityName(cityByCode(city))}), fmtDate(ci) + " · " + t("nights",{n:nights}) + " · " + t("roomsGuests",{r:rooms,g:guests}) + " · " + t("foundN",{n:found.length}));
      } else if (kind==="tickets"){
        var sel = $("#tPlace").value, date2 = $("#tDate").value, qty = parseInt($("#tQty").value,10);
        lastSearch.date = date2; lastSearch.qty = qty;
        var found2 = tickets.filter(function(x){ return x.on && (sel==="all" || x.id===parseInt(sel,10)); });
        lastResults = found2;
        $("#sortSel").disabled = true;
        var ticketBannerHtml = '<div class="trip-search-banner"><div class="t-text"><strong data-i18n="tripSearchBannerTickets">'+esc(t("tripSearchBannerTickets"))+'</strong><p data-i18n="tripSearchBannerTicketsSub">'+esc(t("tripSearchBannerTicketsSub"))+'</p></div><button type="button" class="btn-trip-banner" id="bannerTripTicketBtn" data-i18n="openTripTicketPortal">'+esc(t("openTripTicketPortal"))+'</button></div>';
        listEl.innerHTML = ticketBannerHtml + found2.map(ticketCard).join("");
        showResults(t("resultsTickets"), fmtDate(date2) + " · " + t("ticketsQty",{n:qty}) + " · " + t("foundN",{n:found2.length}));
      }
      bindBookButtons();
      if (keepScroll) $("#results").classList.remove("hidden");
    }
    $("#pane-flights").addEventListener("submit", function(e){ e.preventDefault(); runSearch("flights"); });
    $("#pane-hotels").addEventListener("submit", function(e){ e.preventDefault(); runSearch("hotels"); });
    $("#pane-tickets").addEventListener("submit", function(e){ e.preventDefault(); runSearch("tickets"); });
    $("#sortSel").addEventListener("change", function(){ if (lastSearch && lastSearch.kind==="flights") runSearch("flights", true); });

    /* ============ Booking ============ */
    var pendingBooking = null;
    function openBooking(bk){
      pendingBooking = bk;
      $("#bkTitle").textContent = t("bkTitle");
      $("#bkSub").textContent = bk.title;
      var rows = bk.rows.map(function(r){ return '<div class="row"><span>'+esc(r[0])+'</span><b>'+esc(r[1])+'</b></div>'; }).join("");
      $("#bkBody").innerHTML =
        '<div class="summary">'+rows+'<div class="row total"><span>'+esc(t("bkTotal"))+'</span><b>'+fmtMoney(bk.total)+'</b></div></div>' +
        '<form class="mform" id="bkForm">' +
        '<div class="field"><label>'+esc(t("bkName"))+'</label><input id="bkName" type="text" autocomplete="name" placeholder="NGUYEN VAN A" required /></div>' +
        '<div class="field"><label>'+esc(t("bkEmail"))+'</label><input id="bkEmail" type="email" autocomplete="email" placeholder="email@example.com" required /></div>' +
        '<div class="field"><label>'+esc(t("bkPhone"))+'</label><input id="bkPhone" type="tel" autocomplete="tel" placeholder="0901 234 567" required /></div>' +
        '<button class="btn-primary" type="submit" style="justify-content:center;width:100%">'+esc(t("bkConfirm"))+' · '+fmtMoney(bk.total)+'</button>' +
        '<p style="text-align:center;font-size:12px;color:var(--muted);margin-top:10px;line-height:1.5">'+esc(t("bkTripNote"))+'</p>' +
        '</form>';
      $("#bookingOverlay").classList.remove("hidden");
      $("#bkForm").addEventListener("submit", function(e){
        e.preventDefault();
        var name = $("#bkName").value.trim(), email = $("#bkEmail").value.trim(), phone = $("#bkPhone").value.trim();
        if (!name || !email || !phone || email.indexOf("@")<0){ toast(t("fillInfo")); return; }
        var code = "BV" + Math.random().toString(36).slice(2,7).toUpperCase();
        bookings.unshift({code:code, name:name, email:email, phone:phone, product:bk.title, route:bk.routeText||"", hotelId:bk.hotelId||0, ticketId:bk.ticketId||0, qty:bk.qty||0, date:bk.date, total:bk.total, status:"paid"});
        renderAdminAll();
        closeBooking();
        toast(t("sendingToTrip"));
        openTripPortal(bk.kind || "flights", bk.tripUrl);
      });
    }
    function closeBooking(){ $("#bookingOverlay").classList.add("hidden"); }
    $("#bkClose").addEventListener("click", closeBooking);
    $("#bookingOverlay").addEventListener("click", function(e){ if (e.target===this) closeBooking(); });

    function bindBookButtons(){
      $$("[data-trip-ticket-url]").forEach(function(b){
        if (b.dataset.bound) return; b.dataset.bound = "1";
        b.addEventListener("click", function(e){
          e.preventDefault();
          var u = b.getAttribute("data-trip-ticket-url");
          openTripPortal("tickets", u);
        });
      });
      var bannerFlight = $("#bannerTripFlightBtn");
      if (bannerFlight && !bannerFlight.dataset.bound){
        bannerFlight.dataset.bound = "1";
        bannerFlight.addEventListener("click", function(){
          openTripPortal("flights", lastSearch && lastSearch.tripUrl ? lastSearch.tripUrl : null);
        });
      }
      var bannerHotel = $("#bannerTripHotelBtn");
      if (bannerHotel && !bannerHotel.dataset.bound){
        bannerHotel.dataset.bound = "1";
        bannerHotel.addEventListener("click", function(){ openTripPortal("hotels"); });
      }
      var bannerTicket = $("#bannerTripTicketBtn");
      if (bannerTicket && !bannerTicket.dataset.bound){
        bannerTicket.dataset.bound = "1";
        bannerTicket.addEventListener("click", function(){ openTripPortal("tickets"); });
      }
      $$("[data-book-flight]").forEach(function(b){
        if (b.dataset.bound) return; b.dataset.bound = "1";
        b.addEventListener("click", function(){
          var p = b.getAttribute("data-book-flight").split("|");
          var a = airlineOf(p[1]), pax = lastSearch && lastSearch.pax ? lastSearch.pax : 1;
          var price = parseInt(p[4],10);
          var fromCode = (lastSearch && lastSearch.from ? lastSearch.from : "SGN").toUpperCase();
          var toCode = (lastSearch && lastSearch.to ? lastSearch.to : "HAN").toUpperCase();
          var depDate = lastSearch && lastSearch.date ? lastSearch.date : isoDay(new Date(today.getTime()+7*864e5));
          var round = $('input[name="trip"]:checked') && $('input[name="trip"]:checked').value === "round";
          var rdate = $("#fReturn") ? $("#fReturn").value : "";
          var flightTripUrl = (lastSearch && lastSearch.tripUrl) ? lastSearch.tripUrl : tripLink("https://vn.trip.com/flights/showfarefirst?dcity=" + fromCode.toLowerCase() + "&acity=" + toCode.toLowerCase() + "&ddate=" + depDate + (round && rdate ? "&rdate=" + rdate : "") + "&quantity=" + pax + "&curr=" + currency);

          openBooking({
            kind: "flights",
            title: a.name + " " + p[0],
            rows: [
              [t("colRoute"), fromCode + " → " + toCode],
              [t("depart"), fmtDate(depDate) + " · " + fmtTime(parseInt(p[2],10)) + " → " + fmtTime(parseInt(p[3],10))],
              [t("pax"), String(pax)],
              [t("perPerson"), fmtMoney(price)]
            ],
            total: price * pax,
            date: depDate,
            routeText: fromCode + " → " + toCode + " · " + p[0],
            tripUrl: flightTripUrl
          });
        });
      });
      $$("[data-book-hotel]").forEach(function(b){
        if (b.dataset.bound) return; b.dataset.bound = "1";
        b.addEventListener("click", function(){
          var h = hotels.filter(function(x){ return x.id===parseInt(b.getAttribute("data-book-hotel"),10); })[0];
          if (!h) return;
          var nights = lastSearch && lastSearch.kind==="hotels" ? lastSearch.nights : 2;
          var rooms = lastSearch && lastSearch.kind==="hotels" ? lastSearch.rooms : 1;
          var date = lastSearch && lastSearch.kind==="hotels" ? lastSearch.date : isoDay(new Date(today.getTime()+7*864e5));
          var hotelTripUrl = tripLink("https://vn.trip.com/hotels/", { curr: currency });
          openBooking({
            kind: "hotels",
            title: h.name,
            rows: [
              [t("colHotel"), h.name],
              [t("checkin"), fmtDate(date)],
              [t("nights",{n:nights}), t("roomsGuests",{r:rooms,g:2})],
              [t("perNight"), fmtMoney(h.price)]
            ],
            total: h.price * nights * rooms, date: date, hotelId: h.id,
            tripUrl: hotelTripUrl
          });
        });
      });
      $$("[data-book-ticket]").forEach(function(b){
        if (b.dataset.bound) return; b.dataset.bound = "1";
        b.addEventListener("click", function(){
          var x = tickets.filter(function(y){ return y.id===parseInt(b.getAttribute("data-book-ticket"),10); })[0];
          if (!x) return;
          var qty = lastSearch && lastSearch.kind==="tickets" ? lastSearch.qty : 2;
          var date = lastSearch && lastSearch.kind==="tickets" ? lastSearch.date : isoDay(new Date(today.getTime()+7*864e5));
          var name = lang==="vi" ? x.nameVi : x.nameEn;
          var ticketTripUrl = x.tripUrl ? tripLink(x.tripUrl) : tripLink("https://vn.trip.com/things-to-do/", { curr: currency });
          openBooking({
            kind: "tickets",
            title: name,
            rows: [
              [t("colAttraction"), name],
              [t("visitDate"), fmtDate(date)],
              [t("ticketQty"), String(qty)],
              [t("perTicket"), fmtMoney(x.price)]
            ],
            total: x.price * qty, date: date, ticketId: x.id, qty: qty,
            tripUrl: ticketTripUrl
          });
        });
      });
    }

    /* ============ Admin ============ */
    function statusBadge(st){
      if (st==="paid") return '<span class="status st-paid">'+esc(t("statusPaid"))+'</span>';
      if (st==="pending") return '<span class="status st-pend">'+esc(t("statusPending"))+'</span>';
      return '<span class="status st-cancel">'+esc(t("statusCancelled"))+'</span>';
    }
    function bookingProduct(b){
      if (b.product) return b.product;
      if (b.route) return t("flightWord") + " " + b.route;
      if (b.hotelId){ var h = hotels.filter(function(x){return x.id===b.hotelId;})[0]; return t("hotelWord") + " · " + (h?h.name:""); }
      if (b.ticketId){ var x = tickets.filter(function(y){return y.id===b.ticketId;})[0]; return t("ticketWord") + " · " + (x ? (lang==="vi"?x.nameVi:x.nameEn) : ""); }
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
      $("#recentBody").innerHTML = bookings.slice(0,5).map(function(b){ return bookingRow(b,false); }).join("");
      $("#bookingsBody").innerHTML = bookings.map(function(b){ return bookingRow(b,true); }).join("");
      var rev = bookings.filter(function(b){return b.status==="paid";}).reduce(function(s,b){return s+b.total;},0);
      $("#statRevenue").textContent = fmtMoney(rev + 7380);
      $("#statOrders").textContent = String(bookings.length + 1243);
      $("#statTickets").textContent = (28640 + bookings.length).toLocaleString("vi-VN");
      $$("#bookingsBody [data-confirm]").forEach(function(btn){
        btn.addEventListener("click", function(){
          var b = bookings.filter(function(x){return x.code===btn.getAttribute("data-confirm");})[0];
          if (b){ b.status = "paid"; renderAdminAll(); toast(t("toastConfirmed",{code:b.code})); }
        });
      });
      $$("#bookingsBody [data-cancel]").forEach(function(btn){
        btn.addEventListener("click", function(){
          var b = bookings.filter(function(x){return x.code===btn.getAttribute("data-cancel");})[0];
          if (b){ b.status = "cancelled"; renderAdminAll(); toast(t("toastCancelled",{code:b.code})); }
        });
      });
      /* flights */
      $("#adminFlightsBody").innerHTML = routes.map(function(r, i){
        var a = airlineOf(r.al);
        return '<tr><td><b>'+r.from+' → '+r.to+'</b></td><td>'+esc(a.name)+'</td><td>'+r.seats+'</td>' +
          '<td><input class="price-in" type="number" step="1" min="0" value="'+r.price+'" data-route-price="'+i+'" /></td>' +
          '<td><span class="status '+(r.on?"st-on":"st-off")+'">'+esc(r.on?t("stOn"):t("stOff"))+'</span></td>' +
          '<td><button class="mini" data-route-toggle="'+i+'">'+esc(t("toggle"))+'</button></td></tr>';
      }).join("");
      $$("[data-route-price]").forEach(function(inp){
        inp.addEventListener("change", function(){
          var r = routes[parseInt(inp.getAttribute("data-route-price"),10)];
          var v = parseInt(inp.value,10); if (!isNaN(v) && v>=0){ r.price = v; renderDests(); toast(t("toastPrice")); }
        });
      });
      $$("[data-route-toggle]").forEach(function(btn){
        btn.addEventListener("click", function(){
          var r = routes[parseInt(btn.getAttribute("data-route-toggle"),10)];
          r.on = !r.on; renderAdminAll(); renderDests(); toast(t("toastToggled"));
        });
      });
      /* hotels */
      $("#adminHotelsBody").innerHTML = hotels.map(function(h){
        return '<tr><td><b>'+esc(h.name)+'</b><br /><span style="color:var(--muted)">'+stars(h.stars)+'</span></td><td>'+esc(lang==="vi"?h.cityVi:h.cityEn)+'</td>' +
          '<td><input class="price-in" type="number" step="1" min="0" value="'+h.price+'" data-hotel-price="'+h.id+'" /></td>' +
          '<td><span class="status '+(h.on?"st-on":"st-off")+'">'+esc(h.on?t("stOn"):t("stOff"))+'</span></td>' +
          '<td><button class="mini" data-hotel-toggle="'+h.id+'">'+esc(t("toggle"))+'</button></td></tr>';
      }).join("");
      $$("[data-hotel-price]").forEach(function(inp){
        inp.addEventListener("change", function(){
          var h = hotels.filter(function(x){return x.id===parseInt(inp.getAttribute("data-hotel-price"),10);})[0];
          var v = parseInt(inp.value,10); if (h && !isNaN(v) && v>=0){ h.price = v; renderHotels(); if (lastSearch && lastSearch.kind==="hotels") runSearch("hotels", true); toast(t("toastPrice")); }
        });
      });
      $$("[data-hotel-toggle]").forEach(function(btn){
        btn.addEventListener("click", function(){
          var h = hotels.filter(function(x){return x.id===parseInt(btn.getAttribute("data-hotel-toggle"),10);})[0];
          if (h){ h.on = !h.on; renderAdminAll(); renderHotels(); toast(t("toastToggled")); }
        });
      });
      /* tickets */
      $("#adminTicketsBody").innerHTML = tickets.map(function(x){
        return '<tr><td><b>'+esc(lang==="vi"?x.nameVi:x.nameEn)+'</b></td><td>'+esc(lang==="vi"?x.cityVi:x.cityEn)+'</td>' +
          '<td><input class="price-in" type="number" step="1" min="0" value="'+x.price+'" data-ticket-price="'+x.id+'" /></td>' +
          '<td><span class="status '+(x.on?"st-on":"st-off")+'">'+esc(x.on?t("stOn"):t("stOff"))+'</span></td>' +
          '<td><button class="mini" data-ticket-toggle="'+x.id+'">'+esc(t("toggle"))+'</button></td></tr>';
      }).join("");
      $$("[data-ticket-price]").forEach(function(inp){
        inp.addEventListener("change", function(){
          var x = tickets.filter(function(y){return y.id===parseInt(inp.getAttribute("data-ticket-price"),10);})[0];
          var v = parseInt(inp.value,10); if (x && !isNaN(v) && v>=0){ x.price = v; renderTickets(); renderCaTickets(); if (lastSearch && lastSearch.kind==="tickets") runSearch("tickets", true); toast(t("toastPrice")); }
        });
      });
      $$("[data-ticket-toggle]").forEach(function(btn){
        btn.addEventListener("click", function(){
          var x = tickets.filter(function(y){return y.id===parseInt(btn.getAttribute("data-ticket-toggle"),10);})[0];
          if (x){ x.on = !x.on; renderAdminAll(); renderTickets(); renderCaTickets(); fillCitySelects(); toast(t("toastToggled")); }
        });
      });
      /* deals */
      $("#adminDealsBody").innerHTML = deals.map(function(d){
        return '<tr><td><b>'+esc(d.code)+'</b></td><td>'+esc(lang==="vi"?d.vi:d.en)+'</td><td>'+esc(d.exp)+'</td>' +
          '<td><span class="status '+(d.on?"st-on":"st-off")+'">'+esc(d.on?t("stOn"):t("stOff"))+'</span></td>' +
          '<td><button class="mini" data-deal-toggle="'+d.id+'">'+esc(t("toggle"))+'</button></td></tr>';
      }).join("");
      $$("[data-deal-toggle]").forEach(function(btn){
        btn.addEventListener("click", function(){
          var d = deals.filter(function(x){return x.id===parseInt(btn.getAttribute("data-deal-toggle"),10);})[0];
          if (d){ d.on = !d.on; renderAdminAll(); renderDeals(); toast(t("toastToggled")); }
        });
      });
    }
    $("#tripForm").addEventListener("submit", function(e){
      e.preventDefault();
      tripAffiliate.allianceid = $("#tripAllianceId").value.trim();
      tripAffiliate.sid = $("#tripSid").value.trim();
      renderTickets(); renderCaTickets();
      if (lastSearch && lastSearch.kind==="tickets") runSearch("tickets", true);
      toast(t("toastTripSaved"));
    });

    $("#addDealBtn").addEventListener("click", function(){
      var n = deals.length + 1;
      deals.push({id:Date.now(), code:"UUDDAI"+n, pct:5, cls:"d"+((n%3)+1), exp:"31/12/2026", on:true,
        vi:"Giảm 5% cho đơn hàng tiếp theo — áp dụng mọi sản phẩm.", en:"5% off your next order — applies to all products."});
      renderAdminAll(); renderDeals(); toast(t("toastToggled"));
    });

    $$("#adminTabs button").forEach(function(btn){
      btn.addEventListener("click", function(){
        $$("#adminTabs button").forEach(function(b){ b.classList.remove("on"); });
        btn.classList.add("on");
        ["overview","bookings","flights","hotels","tickets","deals","trip"].forEach(function(k){
          $("#atab-"+k).classList.toggle("hidden", k!==btn.getAttribute("data-atab"));
        });
      });
    });
    $("#openAdmin").addEventListener("click", function(){
      $("#customerView").classList.add("hidden"); $("#adminView").classList.remove("hidden");
      window.scrollTo({top:0}); renderAdminAll(); $("#tripAllianceId").value = tripAffiliate.allianceid; $("#tripSid").value = tripAffiliate.sid;
    });
    $("#backToSite").addEventListener("click", function(){
      $("#adminView").classList.add("hidden"); $("#customerView").classList.remove("hidden");
      window.scrollTo({top:0});
    });

    /* ============ Language ============ */
    $("#langVi").addEventListener("click", function(){ if (lang!=="vi"){ lang="vi"; applyLang(); } });
    $("#langEn").addEventListener("click", function(){ if (lang!=="en"){ lang="en"; applyLang(); } });

    /* ============ Currency ============ */
    function setCurrency(c){
      if (!FX[c]) return;
      currency = c;
      $$(".cur-sel").forEach(function(s){ s.value = c; });
      renderDeals(); renderDests(); renderHotels(); renderTickets(); renderCaTickets(); renderAdminAll();
      if (lastSearch) runSearch(lastSearch.kind, true);
    }
    $$(".cur-sel").forEach(function(s){
      s.addEventListener("change", function(){ setCurrency(s.value); });
    });

    /* ============ Trip.com Flight Modal Listeners ============ */
    var navTrip = $("#navTripFlights");
    if (navTrip){
      navTrip.addEventListener("click", function(e){
        e.preventDefault();
        openTripFlightsModal();
      });
    }
    var openTripBtn = $("#openTripFlightsBtn");
    if (openTripBtn){
      openTripBtn.addEventListener("click", function(){
        var from = ($("#fFrom").value || "SGN").toLowerCase();
        var to = ($("#fTo").value || "HAN").toLowerCase();
        var date = $("#fDepart").value;
        var round = $('input[name="trip"]:checked') && $('input[name="trip"]:checked').value === "round";
        var rdate = $("#fReturn") ? $("#fReturn").value : "";
        var pax = $("#fPax") ? parseInt($("#fPax").value,10) : 1;
        var url = "https://vn.trip.com/flights/showfarefirst?dcity=" + from + "&acity=" + to + "&ddate=" + date + (round && rdate ? "&rdate=" + rdate : "") + "&quantity=" + pax + "&curr=" + currency;
        openTripPortal("flights", tripLink(url));
      });
    }
    var openTripHotelsBtn = $("#openTripHotelsBtn");
    if (openTripHotelsBtn){
      openTripHotelsBtn.addEventListener("click", function(){
        openTripPortal("hotels");
      });
    }
    var openTripTicketsBtn = $("#openTripTicketsBtn");
    if (openTripTicketsBtn){
      openTripTicketsBtn.addEventListener("click", function(){
        openTripPortal("tickets");
      });
    }
    var tripClose = $("#tripModalClose");
    if (tripClose){
      tripClose.addEventListener("click", closeTripFlightsModal);
    }
    var tripModalEl = $("#tripModal");
    if (tripModalEl){
      tripModalEl.addEventListener("click", function(e){
        if (e.target === this) closeTripFlightsModal();
      });
    }
    var adminPrevFlight = $("#adminPreviewTripFlightBtn");
    if (adminPrevFlight){
      adminPrevFlight.addEventListener("click", function(){
        openTripPortal("flights");
      });
    }
    var adminPrevHotel = $("#adminPreviewTripHotelBtn");
    if (adminPrevHotel){
      adminPrevHotel.addEventListener("click", function(){
        openTripPortal("hotels");
      });
    }
    var adminPrevTicket = $("#adminPreviewTripTicketBtn");
    if (adminPrevTicket){
      adminPrevTicket.addEventListener("click", function(){
        openTripPortal("tickets");
      });
    }
    document.addEventListener("keydown", function(e){
      if (e.key === "Escape"){
        closeTripFlightsModal();
        closeBooking();
      }
    });

    /* ============ Init ============ */
    setDates(); fillCitySelects(); renderDeals(); renderDests(); renderHotels(); renderTickets(); renderCaTickets(); renderAdminAll();
  })();
  