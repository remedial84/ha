for entity_id in hass.states.entity_ids('input_select'):
  if hass.states.get(entity_id).state != 'cleaning' and hass.states.get(entity_id).attributes["friendly_name"].startswith("clean_"):
      hass.states.set(entity_id, 'disabled', hass.states.get(entity_id).attributes)
