import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class userdata {
  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

}