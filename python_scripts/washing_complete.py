#import random

people_home = []
message = ''

logger.info("Running washing complete ")

for person in hass.states.entity_ids('person'):
  if hass.states.get(person).state == 'home':
      people_home.append(hass.states.get(person).attributes["friendly_name"])
      
if len(people_home) > 0:
  message = "The washing is finished. It is " + random.choice(people_home) + "'s turn to hang it out." 
else:
  message = "The washing is finished. Whoever is home next hangs it out!"

logger.info("Running washing complete message: " + message)

#now spread the message
service_data = {"message": message,  "title": "Washing"}
hass.services.call("notify", "allphones", service_data, False)
service_data = {"message": message,  "target": ["753490873274204211"]}
hass.services.call("notify", "twelve", service_data, False)
service_data = {"entity_id": "media_player.mini_speakers", "message": message }
hass.services.call("tts", "google_cloud_say", service_data, False)