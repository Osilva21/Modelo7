"use strict";
let direction = "ltr";
isRtl && (direction = "rtl"),
    document.addEventListener("DOMContentLoaded", function () {
        !(function () {
            const e = document.getElementById("calendar"),
                t = document.querySelector(".app-calendar-sidebar"),
                n = document.getElementById("addEventSidebar"),
                a = document.querySelector(".app-overlay"),
                l = { Business: "primary", Holiday: "success", Personal: "danger", Family: "warning", ETC: "info" },
                i = document.querySelector(".offcanvas-title"),
                r = document.querySelector(".btn-toggle-sidebar"),
                d = document.querySelector('button[type="submit"]'),
                o = document.querySelector(".btn-delete-event"),
                s = document.querySelector(".btn-cancel"),
                c = document.querySelector("#eventTitle"),
                u = document.querySelector("#eventStartDate"),
                v = document.querySelector("#eventEndDate"),
                m = document.querySelector("#eventURL"),
                p = $("#eventLabel"),
                f = $("#eventGuests"),
                g = document.querySelector("#eventLocation"),
                b = document.querySelector("#eventDescription"),
                h = document.querySelector(".allDay-switch"),
                y = document.querySelector(".select-all"),
                S = [].slice.call(document.querySelectorAll(".input-filter")),
                L = document.querySelector(".inline-calendar");
            let E,
                k,
                w = events,
                x = !1;
            const q = new bootstrap.Offcanvas(n);
            if (p.length) {
                function Y(e) {
                    return e.id ? "<span class='badge badge-dot bg-" + $(e.element).data("label") + " me-2'> </span>" + e.text : e.text;
                }
                p.wrap('<div class="position-relative"></div>').select2({
                    placeholder: "Select value",
                    dropdownParent: p.parent(),
                    templateResult: Y,
                    templateSelection: Y,
                    minimumResultsForSearch: -1,
                    escapeMarkup: function (e) {
                        return e;
                    },
                });
            }
            if (f.length) {
                function C(e) {
                    return e.id
                        ? "<div class='d-flex flex-wrap align-items-center'><div class='avatar avatar-xs me-2'><img src='" +
                              assetsPath +
                              "img/avatars/" +
                              $(e.element).data("avatar") +
                              "' alt='avatar' class='rounded-circle' /></div>" +
                              e.text +
                              "</div>"
                        : e.text;
                }
                f.wrap('<div class="position-relative"></div>').select2({
                    placeholder: "Select value",
                    dropdownParent: f.parent(),
                    closeOnSelect: !1,
                    templateResult: C,
                    templateSelection: C,
                    escapeMarkup: function (e) {
                        return e;
                    },
                });
            }
            if (u)
                var D = u.flatpickr({
                    enableTime: !0,
                    altFormat: "Y-m-dTH:i:S",
                    onReady: function (e, t, n) {
                        n.isMobile && n.mobileInput.setAttribute("step", null);
                    },
                });
            if (v)
                var P = v.flatpickr({
                    enableTime: !0,
                    altFormat: "Y-m-dTH:i:S",
                    onReady: function (e, t, n) {
                        n.isMobile && n.mobileInput.setAttribute("step", null);
                    },
                });
            function M() {
                const e = document.querySelector(".fc-sidebarToggle-button");
                for (e.classList.remove("fc-button-primary"), e.classList.add("d-lg-none", "d-inline-block", "ps-0"); e.firstChild; ) e.firstChild.remove();
                e.setAttribute("data-bs-toggle", "sidebar"), e.setAttribute("data-overlay", ""), e.setAttribute("data-target", "#app-calendar-sidebar"), e.insertAdjacentHTML("beforeend", '<i class="bx bx-menu bx-sm text-body"></i>');
            }
            L && (k = L.flatpickr({ monthSelectorType: "static", inline: !0 }));
            let T = new Calendar(e, {
                initialView: "dayGridMonth",
                events: function (e, t) {
                    let n = (function () {
                        let e = [];
                        return (
                            [].slice.call(document.querySelectorAll(".input-filter:checked")).forEach((t) => {
                                e.push(t.getAttribute("data-value"));
                            }),
                            e
                        );
                    })();
                    t(
                        w.filter(function (e) {
                            return n.includes(e.extendedProps.calendar.toLowerCase());
                        })
                    );
                },
                plugins: [dayGridPlugin, interactionPlugin, listPlugin, timegridPlugin],
                editable: !0,
                dragScroll: !0,
                dayMaxEvents: 2,
                eventResizableFromStart: !0,
                customButtons: { sidebarToggle: { text: "Sidebar" } },
                headerToolbar: { start: "sidebarToggle, prev,next, title", end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth" },
                direction: direction,
                initialDate: new Date(),
                navLinks: !0,
                eventClassNames: function ({ event: e }) {
                    return ["fc-event-" + l[e._def.extendedProps.calendar]];
                },
                dateClick: function (e) {
                    let t = moment(e.date).format("YYYY-MM-DD");
                    F(), q.show(), i && (i.innerHTML = "Add Event"), (d.innerHTML = "Add"), d.classList.remove("btn-update-event"), d.classList.add("btn-add-event"), o.classList.add("d-none"), (u.value = t), (v.value = t);
                },
                eventClick: function (e) {
                    !(function (e) {
                        (E = e.event),
                            E.url && (e.jsEvent.preventDefault(), window.open(E.url, "_blank")),
                            q.show(),
                            i && (i.innerHTML = "Update Event"),
                            (d.innerHTML = "Update"),
                            d.classList.add("btn-update-event"),
                            d.classList.remove("btn-add-event"),
                            o.classList.remove("d-none"),
                            (c.value = E.title),
                            D.setDate(E.start, !0, "Y-m-d"),
                            !0 === E.allDay ? (h.checked = !0) : (h.checked = !1),
                            null !== E.end ? P.setDate(E.end, !0, "Y-m-d") : P.setDate(E.start, !0, "Y-m-d"),
                            p.val(E.extendedProps.calendar).trigger("change"),
                            void 0 !== E.extendedProps.location && (g.value = E.extendedProps.location),
                            void 0 !== E.extendedProps.guests && f.val(E.extendedProps.guests).trigger("change"),
                            void 0 !== E.extendedProps.description && (b.value = E.extendedProps.description);
                    })(e);
                },
                datesSet: function () {
                    M();
                },
                viewDidMount: function () {
                    M();
                },
            });
            T.render(), M();
            const A = document.getElementById("eventForm");
            FormValidation.formValidation(A, {
                fields: {
                    eventTitle: { validators: { notEmpty: { message: "Please enter event title " } } },
                    eventStartDate: { validators: { notEmpty: { message: "Please enter start date " } } },
                    eventEndDate: { validators: { notEmpty: { message: "Please enter end date " } } },
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap5: new FormValidation.plugins.Bootstrap5({
                        eleValidClass: "",
                        rowSelector: function (e, t) {
                            return ".mb-3";
                        },
                    }),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    autoFocus: new FormValidation.plugins.AutoFocus(),
                },
            })
                .on("core.form.valid", function () {
                    x = !0;
                })
                .on("core.form.invalid", function () {
                    x = !1;
                });
            r &&
                r.addEventListener("click", (e) => {
                    s.classList.remove("d-none");
                });
            function F() {
                (v.value = ""), (m.value = ""), (u.value = ""), (c.value = ""), (g.value = ""), (h.checked = !1), f.val("").trigger("change"), (b.value = "");
            }
            d.addEventListener("click", (e) => {
                if (d.classList.contains("btn-add-event")) {
                    if (x) {
                        let e = {
                            id: T.getEvents().length + 1,
                            title: c.value,
                            start: u.value,
                            end: v.value,
                            startStr: u.value,
                            endStr: v.value,
                            display: "block",
                            extendedProps: { location: g.value, guests: f.val(), calendar: p.val(), description: b.value },
                        };
                        m.value && (e.url = m.value), h.checked && (e.allDay = !0), (t = e), w.push(t), T.refetchEvents(), q.hide();
                    }
                } else if (x) {
                    !(function (e) {
                        (e.id = parseInt(e.id)), (w[w.findIndex((t) => t.id === e.id)] = e), T.refetchEvents();
                    })({ id: E.id, title: c.value, start: u.value, end: v.value, url: m.value, extendedProps: { location: g.value, guests: f.val(), calendar: p.val(), description: b.value }, display: "block", allDay: !!h.checked }),
                        q.hide();
                }
                var t;
            }),
                o.addEventListener("click", (e) => {
                    var t;
                    (t = parseInt(E.id)),
                        (w = w.filter(function (e) {
                            return e.id != t;
                        })),
                        T.refetchEvents(),
                        q.hide();
                }),
                n.addEventListener("hidden.bs.offcanvas", function () {
                    F();
                }),
                r.addEventListener("click", (e) => {
                    i && (i.innerHTML = "Add Event"), (d.innerHTML = "Add"), d.classList.remove("btn-update-event"), d.classList.add("btn-add-event"), o.classList.add("d-none"), t.classList.remove("show"), a.classList.remove("show");
                }),
                y &&
                    y.addEventListener("click", (e) => {
                        e.currentTarget.checked ? document.querySelectorAll(".input-filter").forEach((e) => (e.checked = 1)) : document.querySelectorAll(".input-filter").forEach((e) => (e.checked = 0)), T.refetchEvents();
                    }),
                S &&
                    S.forEach((e) => {
                        e.addEventListener("click", () => {
                            document.querySelectorAll(".input-filter:checked").length < document.querySelectorAll(".input-filter").length ? (y.checked = !1) : (y.checked = !0), T.refetchEvents();
                        });
                    }),
                k.config.onChange.push(function (e) {
                    T.changeView(T.view.type, moment(e[0]).format("YYYY-MM-DD")), M(), t.classList.remove("show"), a.classList.remove("show");
                });
        })();
    });
