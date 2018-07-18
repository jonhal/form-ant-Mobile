echo "execute webpack packing......"
rm -rf output
npm run build
echo "webpack done ! "
tar -zcvf output.tar.gz ./output
rm -rf output
mkdir output
mv output.tar.gz ./output
tar -zxvf ./output/output.tar.gz
rm ./output/output.tar.gz
rm -rf assets
rm index.html
mv ./output/* ./
echo "build done ! "
