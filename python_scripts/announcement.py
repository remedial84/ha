# A script that can check for speakers on and playing for music.
# need to pause music, make announcement, and restart music, maybe wait for music to finish if it's a good song?
message = data.get("message")
entity_id = data.get("entity_id")
spot = "media_player.spotify_remedial84"

logger.info("Announcement to " + entity_id + " starting")

playing = hass.states.get(spot).state == 'playing'
logger.info("Spotify state is: " + hass.states.get(spot).state)

# check if playing
if playing:
   #pause the playback
   hass.services.call("media_player","media_pause",{"entity_id": spot}, False)
   logger.info("Spotify was playing during announcment: " + hass.states.get(spot).attributes['media_title'])
   #send the announcment
   service_data = {"entity_id": entity_id, "message": message }
   hass.services.call("tts", "google_cloud_say", service_data, True)
   #start the playback   
   hass.services.call("media_player","media_play",{"entity_id": spot}, False)
else:
   service_data = {"entity_id": entity_id, "message": message }
   hass.services.call("tts", "google_cloud_say", service_data, False)
