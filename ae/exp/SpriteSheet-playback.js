const tile_size = [427,240];
const columns = 13;
const rows = 14;
const start_val = tile_size/2;
const cur_frame = (time-thisLayer.inPoint)/thisComp.frameDuration;
const x_counter = cur_frame % columns;
const y_counter = Math.floor(cur_frame/columns)%rows;
const out_val = start_val+[tile_size[0]*x_counter,tile_size[1]*y_counter];

out_val
// throw([x_counter,y_counter])