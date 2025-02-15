mvn -B clean install jdeb:jdeb  -DskipTests=true -Drat.skip=true   -Dfindbugs.skip=true -Dcheckstyle.skip=true -pl 'ambari-server' -am
