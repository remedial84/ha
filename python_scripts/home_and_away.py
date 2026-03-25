direction = data.get("direction")
person = data.get("person")

logger.info("Running Home and Away: " + direction)

# Get the name and list of nickmanes if they exist
names = []
names.append(hass.states.get(person).attributes["friendly_name"])
#logger.info("H&A Nicknames: " + hass.states.get(person).attributes["nicknames"])
if "nicknames" in hass.states.get(person).attributes:
  for n in hass.states.get(person).attributes["nicknames"]:
   names.append(n)
#names += hass.states.get(person).attributes["nicknames"]
name = random.choice(names)

logger.info("Running Home and Away for: " + name)

mhr = [ "Welcome back home ~Person", "Guess who is home? ~Person is!", "~Person is now in the house.",
 "Welcome Home ~Person.  We have missed you. Or at least  Valerie did.",
 "Our home is now complete, Rest your head and relax your feet! Welcome Back ~Person", 
 "Life is like a song, you’re back where you belong.  Welcome home ~Person", 
 "Hey there ~Person Welcome Home!", 
 "Knock  Knock. Who is There? ~Person is!", 
 "~Person! You are home!", 
 "I know a secret! ~Person is home!",
 "What's in a name? that which we call a ~Person. By any other name would smell as sweet.",
 "How vain, without the merit, is the ~Person",
 "Action without a ~Person, a who attached to it, is meaningless",
 "A ~Person pronounced is the recognition of the individual to whom it belongs",
 "Some men do as much begrudge others a good name, as they want on themselves, and perhaps ~Person is the reason of it",
 "When you love ~Person, you say their name different. Like it's safe inside your mouth.",
 "Do you know that a ~Person is not dead while their name is still spoken?",
 "Good name in man and woman is the immediate jewel of their souls. Unfortunately here's ~Person",
 "There's nothing sweeter in this sad world than the sound of ~Person calling your name.",
  "Well, well, well, look who decided to grace us with their presence. Welcome back, ~Person.",
"Welcome back, ~Person. We've been counting the seconds until your return.",
"Glad to see you're not lost, ~Person. Welcome back.",
"Welcome home, ~Person. We missed you... not really.",
"Look who decided to come back. Welcome, ~Person.",
"We were wondering when you'd finally return, ~Person. Welcome back.",
"Welcome home, ~Person. We've been keeping your seat warm... not really.",
"Welcome back, ~Person. We've been saving all the good stuff for your return.",
"Welcome home, ~Person. We've been counting down the minutes until your return.",
"Welcome back, ~Person. We've been waiting for you... not really."]
mhf = ["~Person has come to visit!",
 "Oh no hide the valuables, ~Person is here",
 "Scanning for lifeforms. Only ~Person found",
 "~Person is coming up, so you better get the party started!",
 "Cover your butt. ~Person is here.",
 "Put the jug on for ~Person.",
 "~Person is here, you know what to do.",
 "Shhhhhhhh, ~Person is here. Hush now.",
 "What’s the worst possible thing you can call a woman? ~Person",
 "What's in a name? that which we call a ~Person. By any other name would smell as sweet.",
  "Oh joy, company! Welcome to my home, ~Person.",
  "Wow, a guest! Just what this place needed, ~Person. Welcome.",
  "Well well, if it isn't ~Person. Welcome to my humble home.",
  "You're here, ~Person? How delightful. Welcome to my home.",
  "Welcome to my home, ~Person,  I'm thrilled to have you here and mess up my clean place.",
  "Yay, visitors! Welcome to my home ~Person, I hope you enjoy the chaos.",
  "Oh, it's you ~Person. Welcome to my home, I'm sure you'll fit right in.",
  "Welcome to my home ~Person,  I'm sure you'll find it as charming as I do.",
  "Nice of you to drop by, ~Person. Welcome to my home, please make yourself comfortable... or not."] 
mar = ["The home is sadder now ~Person has gone.",
 "What will we do now ~Person is gone.",
 "~Person has left. Did someone say party time?",
 "~Person has left home. Is it for good this time?",
 "~Person is gone, you know what to do now.",
 "~Person, enjoy your time away and come back soon. We'll miss you!",
  "~Person, have a great time and come back to share your stories with us.",
  "~Person, don't be a stranger, we'll be here when you get back.",
  "~Person, take your time and come back refreshed and ready to catch up.",
  "~Person, have a safe trip and we'll see you soon.",
  "~Person, don't forget to take lots of pictures, we want to see everything when you get back.",
  "~Person, travel safe and make lots of memories. We'll be here when you return.",
  "~Person, Bon voyage! we'll be looking forward to hearing about your adventures when you get back",
  "~Person, have a great trip, we'll miss you but we'll be eagerly waiting for you to come back",
  "Don't forget to come back, ~Person.",
"Don't have too much fun without us, ~Person.",
"Try not to stay away too long, ~Person.",
"We'll try to survive without you, ~Person.",
"Don't be a stranger, ~Person."]
maf = ["Ding dong the witch is dead, which old which. ~Person the witch.",
 "It's safe to come out. ~Person has gone.",
 "What will we do without ~Person in the house?",
 "~Person is gone, you know what to do now.",
 "Call them ~Person, Harry. Always use the proper name for things. Fear of a name increases fear of the thing itself.",
 "We write ~Persons name in the sand, and the waves roll in and wash them away.",
 "~Persons name tasted of fire and wings, of curling smoke, of subtlety and strength and the rasping whisper of scales.",
 "Goodbye, ~Person! Don't let the door hit you on the way out.",
  "Farewell, ~Person! It was... interesting having you here.",
  "So long, ~Person! We'll try to survive without you.",
  "Adios, ~Person! It's been real... or not.",
  "Good riddance, ~Person! Don't let the door hit you on the way out.",
  "Goodbye ~Person, I'm sure the next place will be a step up from here.",
  "Bye-bye, ~Person! It's been a slice... of something not very nice.",
  "See ya, ~Person! Don't let the door hit you on the way out.",
  "Farewell ~Person, I'm sure we'll never cross paths again... and that's just fine.",
  "Goodbye, ~Person! I hope you find what you're looking for... elsewhere.",
  "~Person, don't cry because it's over, smile because it happened. - Dr. Seuss",
  "~Person, the only true wisdom is in knowing you know nothing. - Socrates",
  "~Person, to be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "~Person, I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "~Person, happiness is not something ready made. It comes from your own actions. - Dalai Lama",
  "~Person, success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "~Person, the best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
  "~Person, don't let yesterday take up too much of today. - Will Rogers",
  "~Person, you only live once, but if you do it right, once is enough. - Mae West",
  "~Person, the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. - Steve Jobs"]
messages = {"home": {"resident": mhr, "foreigner": mhf}, "away": {"resident": mar, "foreigner": maf}} 

logger.info("Running Home and Away")

resident = "foreigner"

for p in hass.states.get('group.residents').attributes['entity_id']:
  if p == person:
      resident = "resident"
   
message = random.choice(messages[direction][resident]).replace("~Person", name)

logger.info("Home and away message: " + message)

#now spread the message
service_data = {"message": message,  "title": name}
hass.services.call("notify", "allphones", service_data, False)
service_data = {"message": message,  "target": ["753490873274204211"]}
hass.services.call("notify", "twelve", service_data, False)
service_data = {"entity_id": "media_player.mini_speakers", "message": message }
hass.services.call("tts", "google_cloud_say", service_data, False)
