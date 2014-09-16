require 'bourbon'

guard 'coffeescript',
  input: 'assets/coffee',
  output: 'assets/js'

guard 'sass',
  input: 'assets/sass',
  output: 'assets/css'
    
guard 'livereload' do
  watch %r{index.html}
  watch %r{assets/(js|css)/.+\.(js|css)}
end