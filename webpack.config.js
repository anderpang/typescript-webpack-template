const path=require("path"),
      webpack=require("webpack"),
      HtmlWebpackPlugin=require("html-webpack-plugin"),
      CopyWebpackPlugin=require("copy-webpack-plugin");

const outpath="out";

module.exports=function(env,argv){
    var config={
          entry:"./src/main.ts",
          output:{
              path:path.resolve(__dirname,outpath),
              filename:"js/[name].[hash:6].js"
          },
          module:{
              rules:[
                  {
                    test:/.ts$/,
                    exclude: /node_modules/,
                    use:"ts-loader"
                    // use:{
                    //     loader:"babel-loader",
                    //     options:{
                    //         presets:["@babel/preset-env"]
                    //     }
                    // }
                  }
              ]
          },
          resolve:{
              extensions:['.ts', '.js', '.json']
          },
          plugins:[
              new webpack.BannerPlugin("<anderpang@foxmail.com>"),
              //new webpack.DefinePlugin({

              //}),
              new HtmlWebpackPlugin({
                  template:"src/index.html"
              }),
              new CopyWebpackPlugin([
                  {
                      from:"static",
                      to:"static"
                  }
              ])
          ],
          devServer:{
              contentBase:outpath,
              inline:true,
              open:true
          }
    };

    return config;
};
