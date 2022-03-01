precision mediump float;

uniform sampler2D u_image;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_texCoord;

void main() {
  float dx = 1.0 / u_resolution.x;
  float dy = 1.0 / u_resolution.y;
  float flag = sin(u_time * 2.0);
  vec4 c = texture2D(u_image, v_texCoord - vec2(0.0, dx * sin(v_texCoord.x / dx * 100.0 + u_time)));
  if (flag > 0.0) {
    gl_FragColor = texture2D(u_image, v_texCoord + vec2(dx * sin(v_texCoord.y / dy * 10.0), dy * sin(v_texCoord.x / dx * 10.0)));
  } else {
    gl_FragColor = texture2D(u_image, v_texCoord + vec2(dx * sin(v_texCoord.y / dy * 20.0), dy * sin(v_texCoord.x / dx * 20.0)));
  }
}