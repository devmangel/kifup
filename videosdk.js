var VideoSDKMeeting = (function () {

    function e() {}

    return (

      (e.prototype.init = function (e) {

        var n = void 0 === e ? {} : e,
          o = n.micEnabled,
          t = n.webcamEnabled,
          a = n.name,
          r = n.meetingId,
          i = n.redirectOnLeave,
          d = n.chatEnabled,
          l = n.screenShareEnabled,
          c = n.pollEnabled,
          p = n.whiteboardEnabled,
          s = n.participantCanToggleSelfWebcam,
          m = n.participantCanToggleSelfMic,
          b = n.raiseHandEnabled,
          u = n.containerId,
          f = n.recordingEnabled,
          g = n.recordingWebhookUrl,
          C = n.recordingAWSDirPath,
          R = n.autoStartRecording,
          U = n.recordingenabledbydefault,
          I = n.participantCanToggleRecording,
          y = n.brandingEnabled,
          h = n.brandLogoURL,
          v = n.brandName,
          E = n.apiKey,
          S = n.participantCanLeave,
          w = n.poweredBy,
          T = n.livestream,
          W = n.joinScreen,
          j = n.permissions,
          L = n.notificationSoundEnabled,
          O = n.notificationAlertsEnabled,
          P = n.pin,
          k = n.leftScreen,
          M = n.maxResolution,
          D = n.animationsEnabled,
          x = n.topbarEnabled,
          A = n.debug;
        try {
          T || (T = {}), j || (j = {}), W || (W = {}), k || (k = {});
          var B = j,
            N = B.askToJoin,
            K = B.toggleParticipantWebcam,
            J = B.toggleParticipantMic,
            H = B.removeParticipant,
            V = B.endMeeting,
            _ = B.drawOnWhiteboard,
            z = B.toggleWhiteboard,
            G = B.toggleRecording;
          N && ((K = !1), (J = !1));
          var q = T,
            F = q.visible,
            Q = q.autoStart,
            X = q.outputs,
            Y = W,
            Z = Y.visible,
            $ = Y.meetingUrl,
            ee = Y.title,
            ne = k.actionButton || {},
            oe = ne.label,
            te = ne.href,
            ae = (null == P ? void 0 : P.allowed) || !1,
            re = (null == P ? void 0 : P.layout) || "GRID";
          R = "boolean" == typeof R ? R : U;

          var ie = [];

          N ? ie.push("ask_join") : ie.push("allow_join");
          var de = { apiKey: E };
          return (

            ie.length && (de.permissions = ie),

            Promise.resolve(
              fetch("https://api.zujonow.com/v1/prebuilt/token", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(de),
              })

            ).then(function (e) {

              function n() {

                var e = parent.document,
                  n = parent.window;
                if (void 0 === n || void 0 === e)
                  throw new Error("No browser detected!");

                var E = e.createElement("iframe");
                E.id = "videosdk-frame";
                var T =
                  "https://embed.videosdk.live/rtc-js-prebuilt/0.1.23/?micEnabled=" +
                  encodeURIComponent(o ? "true" : "false") +
                  "&webcamEnabled=" +
                  encodeURIComponent(t ? "true" : "false") +
                  "&name=" +
                  encodeURIComponent(a) +
                  "&meetingId=" +
                  encodeURIComponent(r || "") +
                  "&redirectOnLeave=" +
                  encodeURIComponent(i || "") +
                  "&chatEnabled=" +
                  encodeURIComponent(d ? "true" : "false") +
                  "&screenShareEnabled=" +
                  encodeURIComponent(l ? "true" : "false") +
                  "&pollEnabled=" +
                  encodeURIComponent(c ? "true" : "false") +
                  "&whiteboardEnabled=" +
                  encodeURIComponent(p ? "true" : "false") +
                  "&participantCanToggleSelfWebcam=" +
                  encodeURIComponent(s ? "true" : "false") +
                  "&participantCanToggleSelfMic=" +
                  encodeURIComponent(m ? "true" : "false") +
                  "&raiseHandEnabled=" +
                  encodeURIComponent(b ? "true" : "false") +
                  "&token=" +
                  encodeURIComponent(U || "") +
                  "&recordingEnabled=" +
                  encodeURIComponent(f ? "true" : "false") +
                  "&recordingWebhookUrl=" +
                  encodeURIComponent(g || "") +
                  "&recordingAWSDirPath=" +
                  encodeURIComponent(C || "") +
                  "&autoStartRecording=" +
                  encodeURIComponent(R ? "true" : "false") +
                  "&participantCanToggleRecording=" +
                  encodeURIComponent(
                    "boolean" == typeof G
                      ? G
                        ? "true"
                        : "false"
                      : "boolean" == typeof I && I
                  ) +
                  "&brandingEnabled=" +
                  encodeURIComponent(y ? "true" : "false") +
                  "&brandLogoURL=" +
                  encodeURIComponent(h || "") +
                  "&brandName=" +
                  encodeURIComponent(v) +
                  "&participantCanLeave=" +
                  encodeURIComponent(
                    "boolean" == typeof S ? (S ? "true" : "false") : "true"
                  ) +
                  "&poweredBy=" +
                  encodeURIComponent(
                    "boolean" == typeof w ? (w ? "true" : "false") : "true"
                  ) +
                  "&liveStreamEnabled=" +
                  encodeURIComponent(F ? "true" : "false") +
                  "&autoStartLiveStream=" +
                  encodeURIComponent(Q ? "true" : "false") +
                  "&liveStreamOutputs=" +
                  encodeURIComponent(JSON.stringify(X || [])) +
                  "&participantCanToggleOtherMic=" +
                  encodeURIComponent(J ? "true" : "false") +
                  "&participantCanToggleOtherWebcam=" +
                  encodeURIComponent(K ? "true" : "false") +
                  "&askJoin=" +
                  encodeURIComponent(N ? "true" : "false") +
                  "&joinScreenEnabled=" +
                  encodeURIComponent(Z ? "true" : "false") +
                  "&joinScreenMeetingUrl=" +
                  encodeURIComponent($ || "") +
                  "&joinScreenTitle=" +
                  encodeURIComponent(ee || "") +
                  "&notificationSoundEnabled=" +
                  encodeURIComponent(
                    "boolean" == typeof L ? (L ? "true" : "false") : "true"
                  ) +
                  "&canPin=" +
                  encodeURIComponent(ae ? "true" : "false") +
                  "&layout=" +
                  encodeURIComponent(re) +
                  "&canEndMeeting=" +
                  encodeURIComponent(
                    "boolean" == typeof V && V ? "true" : "false"
                  ) +
                  "&canDrawOnWhiteboard=" +
                  encodeURIComponent(
                    "boolean" == typeof _ ? (_ ? "true" : "false") : "true"
                  ) +
                  "&canToggleWhiteboard=" +
                  encodeURIComponent(
                    "boolean" == typeof z ? (z ? "true" : "false") : "true"
                  ) +
                  "&canRemoveOtherParticipant=" +
                  encodeURIComponent(
                    "boolean" == typeof H && H ? "true" : "false"
                  ) +
                  "&leftScreenActionButtonLabel=" +
                  encodeURIComponent(oe) +
                  "&leftScreenActionButtonHref=" +
                  encodeURIComponent(te) +
                  "&maxResolution=" +
                  encodeURIComponent(M || "sd") +
                  "&animationsEnabled=" +
                  encodeURIComponent("boolean" != typeof D || D) +
                  "&topbarEnabled=" +
                  encodeURIComponent("boolean" != typeof x || x) +
                  "&notificationAlertsEnabled=" +
                  encodeURIComponent("boolean" != typeof O || O) +
                  "&debug=" +
                  encodeURIComponent("boolean" == typeof A && A);
                (E.src = T),
                  (E.allowfullscreen = !0),
                  (E.width = "100%"),
                  (E.height = "90%"),
                  (E.allow =
                    "camera *; microphone *; fullscreen; display-capture; allow-same-origin; allow-presentation; encrypted-media; midi; encrypted-media "),
                  (E.style.border = 0),
                  (E.allowusermedia = "allowusermedia");
                var W = null;
                if (u) {
                  var j = e.getElementById(u);
                  if (!j) throw new Error("No Container found with id " + u);
                  (W = j), j.appendChild(E);
                } else {
                  var P = e.createElement("div");
                  (P.style.position = "fixed"),
                    (P.style.left = 0),
                    (P.style.right = 0),
                    (P.style.bottom = 0),
                    (P.style.top = 0),
                    (P.classList.add("div-video")),
                    (W = P),
                    P.appendChild(E),
                    (e.body.style.margin = "0px"),
                    (e.body.style.padding = "0px"),
                    (e.body.style.height = "100%"),
                    (e.body.style.overflow = "hidden"),

                    // Here i put the div that contains the iframe with the embeebed video chat
                    
                    document.getElementById('roomContainer').appendChild(P);
                }
                n.addEventListener("popstate", function (e) {
                  W.remove();
                });
              }
              var U;
              console.log(e, "res");
              var E = (function () {
                if (200 === e.status)
                  return Promise.resolve(e.json()).then(function (e) {
                    U = e.token;
                  });
              })();
              return E && E.then ? E.then(n) : n();
            })
          );
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      e
    );
  })();


  exports.VideoSDKMeeting = VideoSDKMeeting;
  