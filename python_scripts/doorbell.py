people_home = []
message = ''
now = datetime.datetime.utcnow()
dt = now - datetime.timedelta(minutes = 10)

logger.debug(dt)

logger.info("Running doorbell")

for person in hass.states.entity_ids('person'):
  if hass.states.get(person).state == 'home' and hass.states.get(person).last_changed.replace(tzinfo=None) > dt:
      people_home.append(hass.states.get(person).attributes["friendly_name"])
      logger.debug("Running doorbell: Found " + hass.states.get(person).attributes["friendly_name"] + " arrived in last 10 minutes")
      
if len(people_home) > 0:
  message = "Someone is at the door. It could be " + ','.join(people_home) + " since they just arrived." 
else:
  message = "Someone is at the door. Who could it be?"

logger.info("Running doorbell message: " + message)

#now spread the message
service_data = {"message": message,  "title": "Doorbell"}
hass.services.call("notify", "allphones", service_data, False)
service_data = {"message": message,  "target": ["753490873274204211"]}
hass.services.call("notify", "twelve", service_data, False)
service_data = {"entity_id": "media_player.mini_speakers", "media_content_id": "http://192.168.14.130:8123/local/sounds/doorbell.mp3", "media_content_type": "music"}
hass.services.call("media_player", "play_media", service_data, False)
time.sleep(8)
service_data = {"entity_id": "media_player.mini_speakers", "message": message }
hass.services.call("tts", "google_cloud_say", service_data, False)